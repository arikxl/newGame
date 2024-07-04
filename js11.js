// SPRITE

const runLeftImg = new Image();
runLeftImg.src = 'img/spriteRunLeft.png'
const runRightImg = new Image();
runRightImg.src = 'img/spriteRunRight.png'
const standLeftImg = new Image();
standLeftImg.src = 'img/spriteStandLeft.png'
const standRightImg = new Image();
standRightImg.src = 'img/spriteStandRight.png'



class Player{
    constructor() {
        this.speed = 10;
        this.width = 66;
        this.height = 150;
        this.position = {
            x: 100,
            y: 200
        };
        this.velocity = {
            x: 0,
            y:1
        }

        this.img = standRightImg;
        this.frames = 0;
 
    }

    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(this.img,
            177 * this.frames,
            0,
            177,
            400,
            this.position.x, this.position.y, this.width, this.height)

    }

    update() {
        this.frames++;
        if (this.frames > 28) {
            this.frames = 0;
        }
        this.draw();
        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y +this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        }
    }
}