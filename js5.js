

// scroll platforms and array

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

class Platform{
    constructor(x,y){
        this.height =20
        this.width = 200
        this.position={
            x: x,
            y: y,
        }
    }

    draw() {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)

    }
}


const player = new Player();
// const platform1 = new Platform();
const platforms = [new Platform(100,300), new Platform(340,200), new Platform( 400, 440)];

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
    // platform1.draw();

    platforms.forEach(platform => {
        platform.draw();
    })

    if (keys.right.pressed && player.position.x < 500) {
        player.velocity.x =5
    } else if ( keys.left.pressed && player.position.x >100 ) {
        player.velocity.x = -5
    }else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            platforms.forEach(platform => {
                platform.position.x -=5
            })
        } else if (keys.left.pressed) {
            platforms.forEach(platform => {
                platform.position.x +=5

            })
        }
    }

    platforms.forEach(platform => {    
        if (
            player.position.y + player.height <= platform.position.y &&
            player.position.y + player.height + player.velocity.y >= platform.position.y &&
            player.position.x + player.width >= platform.position.x &&
            player.position.x <= platform.position.x + platform.width
        ) {
            player.velocity.y =0
        }
    })
}

animate()



window.addEventListener('keydown', (e) => {
    // console.log(e.code)
    switch (e.code) {
        case 'ArrowUp':
            // console.log('up')
            player.velocity.y -=10
            break;
        case 'ArrowDown':
            // console.log('down')
            break;
        case 'ArrowLeft':
            // console.log('left')
            keys.left.pressed = true
            break;
        case 'ArrowRight':
            // console.log('right')
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