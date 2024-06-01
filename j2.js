const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth-0;
canvas.height = window.innerHeight-3.1;

const gravity = 0.5;

class Player{
    constructor() {
        this.width = 30;
        this.height = 30;
        this.position = {
            x: 100,
            y: 200
        };
        this.velocity = {
            x: 0,
            y:1
        }
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw();
        this.position.y += this.velocity.y;

        if (this.position.y +this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}

const player = new Player();


function animate() { 
    requestAnimationFrame(animate);
    // console.log('go')
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.update();
}

animate()