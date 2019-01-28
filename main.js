const canvas = document.getElementsByTagName("canvas")[0];
const ctx = canvas.getContext("2d");

let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight - 5;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let rockets = [];
let particles = [];
let frames;

function randomNumber(min, max) {
    let random = Math.random() * (max - min) + min;
    return random;
}

function map(x, in_min, in_max, out_min, out_max) {
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

function init() {
    frames = 0;
}

function animation() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    for (let i in rockets) {
        rockets[i].draw();
        rockets[i].update();
        if (rockets[i].destroy === true) {
            let amountOfParticles = randomNumber(20, 25);
            for (let j = 0; j < amountOfParticles; j++) {
                particles.push(new Particle(rockets[i].x, rockets[i].y));
            }
            rockets.splice(i, 1);
        }
    }

    for (let i in particles) {
        particles[i].draw();
        particles[i].update();
        if (particles[i].destroy === true) {
            particles.splice(i, 1);
        }
    }

    if (frames % 10 === 0) {
        rockets.push(new Rocket(randomNumber(50, canvasWidth - 50)));
    }
    frames++;
}

//-----------------------------------------
//głowny program---------------------------
init();
setInterval(animation, 1000 / 60);

window.onresize = () => {
    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight - 5;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
};