const photo3d = document.getElementById("photo3d")
var orientation = {
    "alpha": 0,
    "beta": 90,
    "gamma": -90
};

if (window.DeviceOrientationEvent) {
    // Our browser supports DeviceOrientation
    console.log("Your browser support Device Orientation and is running this sensor");
    window.addEventListener("deviceorientation", deviceOrientationListener);
} else {
    console.log("Sorry, your browser doesn't support Device Orientation");
}

function deviceOrientationListener(event) {
    // console.log(`alpha: ${event.alpha}`);
    // console.log(`beta: ${event.beta}`);
    // console.log(`gamma: ${event.gamma}`);
    orientation.alpha = event.alpha;
    orientation.beta = event.beta;
    orientation.gamma = event.gamma;
    console.log(`Device Orientation`);
    console.log(orientation);
}