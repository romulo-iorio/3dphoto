const photo = document.getElementById("photo");
const gammaValue = document.getElementById("gamma");
const gammaDiff = document.getElementById("gamma-diff");
const xPos = document.getElementById("x-pos");
const yPos = document.getElementById("y-pos");
const debug = document.getElementById("debug");
// const betaValue = document.getElementById("beta");
// const gammaValue = document.getElementById("gamma");

var photoPos = {
    x:  4180,       //alpha 4500
    y:  2070        //gamma 2250
};

photo.style.right   = `${photoPos.x}px`;
photo.style.bottom  = `${photoPos.y}px`;

var contIni = 0;
var alphaOld = 0;
var gammaOld = 0;

if (window.DeviceOrientationEvent) {
    // Our browser supports DeviceOrientation
    console.log("Your browser supports Device Orientation and is running this sensor");
    window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
    console.log("Sorry, your browser doesn't support Device Orientation");
}

function deviceOrientationListener(event) {
    // console.log(`Device Orientation`);
    // console.log(`beta: ${Math.round(event.beta)}`);
    // console.log(`gamma: ${Math.round(event.gamma)}`);
    // betaValue.innerText = Math.round(event.beta);
    // gammaValue.innerText = Math.round(event.gamma);
    // console.log(contIni);
    gammaValue.innerText = Math.round(event.gamma);
    gammaDiff.innerText = Math.round(gammaOld - Math.round(event.gamma));
    xPos.innerText  =   photoPos.x;
    yPos.innerText  =   photoPos.y;
    if(!contIni){
        alphaOld = Math.round(event.alpha);
        gammaOld = Math.round(event.gamma);
        contIni = 1;
    }else{
        if(((alphaOld - Math.round(event.alpha)) < 100) && ((alphaOld - Math.round(event.alpha)) > -100)){
            photoPos.x += (alphaOld - Math.round(event.alpha))*3000/360;
        }
        if(photoPos.x >= 7180) { //7500
            photoPos.x -= 3000;
        }else if(photoPos.x <= 1180) { //1500
            photoPos.x += 3000;
        }
        if((gammaOld - Math.round(event.gamma) < 50) && ((gammaOld - Math.round(event.gamma)) > -50)){
            photoPos.y -= (gammaOld - Math.round(event.gamma))*1500/180;
        }
        if(photoPos.y >= 1500) {/
             photoPos.y = 1500;
         }else if(photoPos.y <= 0){
             photoPos.y = 0;
        }
        console.log(`photoPos.x: ${photoPos.x}px`);
        console.log(`alpha: ${Math.round(event.alpha)}`);
        console.log(`alphadiff: ${alphaOld - Math.round(event.alpha)}`);
        console.log(`photoPos.y: ${photoPos.y}px\n`);
        photo.style.right   = `${photoPos.x}px`;
        photo.style.bottom  = `${photoPos.y}px`;
        alphaOld = Math.round(event.alpha);
        gammaOld = Math.round(event.gamma);
    }
}

photo.addEventListener("click", showDebug);

function showDebug(){
    debug.classList.toggle("hidden");
}