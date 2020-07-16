const photo3d = document.getElementById("3dphoto")

if (window.DeviceOrientationEvent) {
    // Our browser supports DeviceOrientation
    console.log("Your browser support Device Orientation and is running this sensor");
    window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
    console.log("Sorry, your browser doesn't support Device Orientation");
}

function deviceOrientationListener(event) {
    console.log(event.alpha);
    console.log(event.beta);
    console.log(event.gamma);
}