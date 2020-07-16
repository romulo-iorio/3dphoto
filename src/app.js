var express = require('express');
var path = require('path');
const routes = require('./routes.js')
const cors = require('cors')
const nunjucks = require('nunjucks');  //Importando nunjucks para usar template engine
const https = require('https');
const fs = require('fs');

var port = 3330;

var app = express();

app.use((req, res, next) => { //Cria um middleware onde todas as requests passam por ele 
    if ((req.headers["x-forwarded-proto"] || "").endsWith("http")) //Checa se o protocolo informado nos headers é HTTP 
        res.redirect(`https://${req.headers.host}${req.url}`); //Redireciona pra HTTPS 
    else //Se a requisição já é HTTPS 
        next(); //Não precisa redirecionar, passa para os próximos middlewares que servirão com o conteúdo desejado 
});

nunjucks.configure("publico/views", {       //Utilizando template engine
    express: app,
    noCache: true
})
app.use(cors());

app.use(routes); //Habilitando o uso de rotas

app.listen(process.env.PORT || port, () => console.log(`Servidor on-line na porta: ${port}`));