const canvas=document.getElementById("particle-canvas");
const ctx=canvas.getContext("2d");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const particles = [];

class Particle{
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1;
        this.speedY = Math.random() * 3 - 1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.radius > 0.2) this.radius -= 0.1;
    }

    draw() {
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'gold';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
    }
}

function handleParticles() {
    for (let i = 0; i < particles.length; i++){
        particles[i].update();
        particles[i].draw();

        if (particles[i].radius < 0.2){
            particles.splice(i, 1);
            i--;
        }
    }
}

function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();

setInterval(() => {
    particles.push(new Particle());
},200);