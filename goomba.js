import { ctx, canvas, gravity} from './main.js';



export function test(text) {
    alert(text)
}


export class Goomba{
    constructor({position, speed}) {
        this.position = {
            x: position.x,
            y: position.y,
        }
        
        this.speed = {
            x: speed.x,
            y: speed.y
        }

        this.width = 50;
        this.height = 50;
    }

    draw() {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, this.width,this.height)
    }

    update() { 
        this.draw()

        this.position.x += this.speed.x
        this.position.y += this.speed.y

        
        if (this.position.y +this.height + this.speed.y <= canvas.height) {
            this.speed.y += gravity;
        }
        
    }
}