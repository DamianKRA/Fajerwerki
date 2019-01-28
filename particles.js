class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        //dzieki temu moge uzyc tej zmiennej w update'cie mapujac radius
        this.rememberedLifetime = randomNumber(2, 3);
        this.lifetimeToChange = this.rememberedLifetime;
        this.vectorX = randomNumber(-5, 5);
        this.velocity = randomNumber(8, 15);
        this.gravity = 0.7;
        this.destroy = false;
        this.radius = 6;
        this.R = Math.floor(randomNumber(0, 255));
        this.G = Math.floor(randomNumber(0, 255));
        this.B = Math.floor(randomNumber(0, 0));
    }

    draw() {
        ctx.shadowBlur = 10;
        ctx.shadowColor = "rgb(" + this.R + "," + this.G + "," + this.B + ")";
        ctx.fillStyle = "rgb(" + this.R + "," + this.G + "," + this.B + ")";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
    }

    update() {
        this.lifetimeToChange -= 0.1;

        this.x += this.vectorX;

        this.velocity -= this.gravity;
        this.y -= this.velocity;

        this.radius = map(this.lifetimeToChange, this.rememberedLifetime, 0, 6, 0);

        if (this.lifetimeToChange <= 0) {
            this.destroy = true;
        }
    }
}