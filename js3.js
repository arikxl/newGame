
// player movment



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
        this.position.x += this.velocity.x;

        if (this.position.y +this.height + this.velocity.y <= canvas.height) {
            this.velocity.y += gravity;
        } else {
            this.velocity.y = 0;
        }
    }
}

const player = new Player();
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    },
};


function animate() { 
    requestAnimationFrame(animate);
    // console.log('go')
    ctx.clearRect(0,0,canvas.width,canvas.height);
    player.update();
    if (keys.right.pressed) {
        player.velocity.x =5
    } else if ( keys.left.pressed ) {
        player.velocity.x = -5
    }else {
        player.velocity.x =0
    }
}

animate()



window.addEventListener('keydown', (e) => {
    // console.log(e.code)
    switch (e.code) {
        case 'ArrowUp':
            console.log('up')
            player.velocity.y -=10
            break;
        case 'ArrowDown':
            console.log('down')
            break;
        case 'ArrowLeft':
            console.log('left')
            keys.left.pressed = true
            break;
        case 'ArrowRight':
            console.log('right')
            keys.right.pressed = true
            // player.velocity.x =1
            break;
        default:
            break;
    }
})

window.addEventListener('keyup', (e) => {
        switch (e.code) {

        // case 'ArrowUp':
        //     console.log('up')
        //     player.velocity.y -=20
        //     break;
        // case 'ArrowDown':
        //     console.log('down')
        //     break;
        case 'ArrowLeft':
            // console.log('left')
            keys.left.pressed = false
            break;
        case 'ArrowRight':
            // console.log('right')
                // player.velocity.x =0
                keys.right.pressed = false
            break;
        default:
            break;
    }
})