const photo = document.getElementById("photo");
const alphaValue = document.getElementById("alpha");
const betaValue = document.getElementById("beta");
const gammaValue = document.getElementById("gamma");

var photoPos = {
    x:  1500,       //alpha
    y:  750         //gamma
};

photo.style.right   = `${photoPos.x}px`;
photo.style.bottom  = `${photoPos.y}px`;

var contIni = 0;
var alphaIni = 0;
var betaIni = 0;
var gammaIni = 0;

if (window.DeviceOrientationEvent) {
    // Our browser supports DeviceOrientation
    console.log("Your browser support Device Orientation and is running this sensor");
    window.addEventListener("deviceorientation", () => {
        setTimeout(() => {
            deviceOrientationListener
        },100)
    });
} else {
    console.log("Sorry, your browser doesn't support Device Orientation");
}

function deviceOrientationListener(event) {
    console.log(`Device Orientation`);
    console.log(`alpha: ${Math.round(event.alpha)}`);
    console.log(`beta: ${Math.round(event.beta)}`);
    console.log(`gamma: ${Math.round(event.gamma)}`);
    // alphaValue.innerText = Math.round(event.alpha);
    // betaValue.innerText = Math.round(event.beta);
    // gammaValue.innerText = Math.round(event.gamma);
    // console.log(contIni);
    if(!contIni){
        alphaIni = Math.round(event.alpha);
        betaIni  = Math.round(event.beta);
        gammaIni = Math.round(event.gamma);
        contIni = 1;
    }else{
        photoPos.x += (alphaIni - Math.round(event.alpha))*3000*2/360;
        photoPos.y -= (gammaIni - Math.round(event.gamma))*1500*2/360;
        if(photoPos.x > 3000) {
            photoPos.x -= 3000;
        }else if(photoPos.x < 0){
            photoPos.x += 3000;
        }
        if(photoPos.y > 1500) {
            photoPos.y -= 1500;
        }else if(photoPos.y < 0){
            photoPos.y += 1500;
        }
        console.log(`photoPos.x: ${photoPos.x}`);
        console.log(`photoPos.y: ${photoPos.y}`);
        photo.style.right   = `${photoPos.x}px`;
        photo.style.bottom  = `${photoPos.y}px`;
    }
}