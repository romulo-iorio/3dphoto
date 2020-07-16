const photo3d = document.getElementById("photo3d")
const alphaValue = document.getElementById("alpha");
const betaValue = document.getElementById("beta");
const gammaValue = document.getElementById("gamma");
var photoPos = {
    x:  1500, 
    y:  750
};

if (window.DeviceOrientationEvent) {
    // Our browser supports DeviceOrientation
    console.log("Your browser support Device Orientation and is running this sensor");
    window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
    console.log("Sorry, your browser doesn't support Device Orientation");
}

function deviceOrientationListener(event) {
    console.log(`Device Orientation`);
    console.log(`alpha: ${event.alpha}`);
    console.log(`beta: ${event.beta}`);
    console.log(`gamma: ${event.gamma}`);
    alphaValue.innerText = Math.round(event.alpha);
    betaValue.innerText = Math.round(event.beta);
    gammaValue.innerText = Math.round(event.gamma);    
}