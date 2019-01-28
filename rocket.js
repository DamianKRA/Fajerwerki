class Rocket {
    constructor(x) {
        this.x = x;
        this.y = canvasHeight;
        this.vectorX = randomNumber(-3, 3);
        this.velocity = Math.floor(randomNumber(18, 23));
        this.gravity = 0.5;
        this.destroy = false;
    }

    draw() {
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#fff";
        ctx.fillStyle = "#ffffff88";
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1, 0, Math.PI * 2);
        ctx.fill();
    }

    update() {
        this.x += this.vectorX;

        this.velocity -= this.gravity;
        this.y -= this.velocity;

        if (this.velocity === 0) this.destroy = true;
    }
}