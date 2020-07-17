const photo3d = document.getElementById("photo3d");
const alphaValue = document.getElementById("alpha");
const betaValue = document.getElementById("beta");
const gammaValue = document.getElementById("gamma");

var photoPos = {
    x:  1500,       //alpha
    y:  750         //gamma
};
var contIni = 0;
var alphaIni = 0;
var betaIni = 0;
var gammaIni = 0;

if (window.DeviceOrientationEvent) {
    // Our browser supports DeviceOrientation
    console.log("Your browser support Device Orientation and is running this sensor");
    window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
    console.log("Sorry, your browser doesn't support Device Orientation");
}

function deviceOrientationListener(event) {
    console.log(`Device Orientation`);
    console.log(`alpha: ${Math.round(event.alpha)}`);
    console.log(`beta: ${Math.round(event.beta)}`);
    console.log(`gamma: ${Math.round(event.gamma)}`);
    alphaValue.innerText = Math.round(event.alpha);
    betaValue.innerText = Math.round(event.beta);
    gammaValue.innerText = Math.round(event.gamma);
    console.log(contIni);
    if(!contIni){
        alphaIni = Math.round(event.alpha);
        betaIni  = Math.round(event.beta);
        gammaIni = Math.round(event.gamma);
        contIni = 1;
    }else{
        photoPos.x += (Math.round(event.alpha) - alphaIni);
        photoPos.y += (Math.round(event.gamma) - gammaIni);
        console.log(`photoPos.x: ${photoPos.x}`);
        console.log(`photoPos.y: ${photoPos.y}`);
        document.getElementById("photo3d").style.right = photoPos.x;
        document.getElementById("photo3d").style.bottom = photoPos.y; 
    }
}