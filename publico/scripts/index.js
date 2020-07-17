const photo = document.getElementById("photo");
const alphaValue = document.getElementById("alpha");
const alphaDiff = document.getElementById("alpha-diff");
// const betaValue = document.getElementById("beta");
// const gammaValue = document.getElementById("gamma");

var photoPos = {
    x:  4500,       //alpha
    y:  750         //gamma
};

photo.style.right   = `${photoPos.x}px`;
photo.style.bottom  = `${photoPos.y}px`;

var contIni = 0;
var alphaOld = 0;
var gammaOld = 0;

if (window.DeviceOrientationEvent) {
    // Our browser supports DeviceOrientation
    console.log("Your browser support Device Orientation and is running this sensor");
    window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
    console.log("Sorry, your browser doesn't support Device Orientation");
}

function deviceOrientationListener(event) {
    // console.log(`Device Orientation`);
    console.log(`alpha: ${Math.round(event.alpha)}`);
    console.log(`alphadiff: ${alphaOld - Math.round(event.alpha)}`);
    // console.log(`beta: ${Math.round(event.beta)}`);
    // console.log(`gamma: ${Math.round(event.gamma)}`);
    alphaValue.innerText = Math.round(event.alpha);
    alphaDiff.innerText = Math.round(alphaOld - Math.round(event.alpha));
    // betaValue.innerText = Math.round(event.beta);
    // gammaValue.innerText = Math.round(event.gamma);
    // console.log(contIni);
    if(!contIni){
        alphaOld = Math.round(event.alpha);
        gammaOld = Math.round(event.gamma);
        contIni = 1;
    }else{
        photoPos.x += (alphaOld - Math.round(event.alpha))*3000/360;
        // if(photoPos.x >= 7500) {
        //     photoPos.x -= 3000;
        // }else if(photoPos.x <= 1500){
        //     photoPos.x += 3000;
        // }
        // photoPos.y -= (gammaOld - Math.round(event.gamma))*1500/360;
        // if(photoPos.y > 1500) {
        //     photoPos.y -= 1500;
        // }else if(photoPos.y < 0){
        //     photoPos.y += 1500;
        // }
        console.log(`photoPos.x: ${photoPos.x}px`);
        //console.log(`photoPos.y: ${photoPos.y}px\n`);
        photo.style.right   = `${photoPos.x}px`;
        // photo.style.bottom  = `${photoPos.y}px`;
        alphaOld = Math.round(event.alpha);
        gammaOld = Math.round(event.gamma);
    }
}