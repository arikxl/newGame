// BACKGROUND  AND PARALLAX

const platformImg = new Image();
platformImg.src = '/img/platform.png'
// console.log('platform:', platformImg.src)
const bgImg = new Image();
bgImg.src = '/img/background.png'
const hillsImg = new Image();
hillsImg.src = '/img/hills.png'



const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5;
let scrollOffset = 0;

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
    constructor(x,y, img){
        this.img = img
        this.width = img.width
        this.height =img.height
        // this.height =80
        this.position={
            x: x,
            y: y,
        }
    }

    draw() {
        // ctx.fillStyle = 'blue';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)
        
    }
}

class Bg{
    constructor(x,y, img){
        this.img = img
        this.width = img.width
        this.height =img.height
        this.position={
            x: x,
            y: y,
        }
    }

    draw() {
        ctx.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)
    }
}


const player = new Player();
// const platform1 = new Platform();
const platforms = [new Platform(-3,470, platformImg), new Platform(700,470,platformImg), new Platform( 1400, 470, platformImg)];
const bgs = [new Bg (-3,-3, bgImg), new Bg (-3,-3, hillsImg), new Bg (900,200, hillsImg),]


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
    ctx.fillStyle ='white'
    ctx.fillRect(0,0,canvas.width,canvas.height);
    // ctx.clearRect(0,0,canvas.width,canvas.height);
    // platform1.draw();
    
    bgs.forEach(bg => {
        bg.draw();
    })
    platforms.forEach(platform => {
        platform.draw();
    })
    player.update();

    if (keys.right.pressed && player.position.x < 500) {
        player.velocity.x=5
    } else if ( keys.left.pressed && player.position.x >100 ) {
        player.velocity.x = -5
    }else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scrollOffset+=5
            platforms.forEach(platform => {
                platform.position.x -= 5
            })
            bgs.forEach(bg => {
                bg.position.x -= 3
            })
        } else if (keys.left.pressed) {
            scrollOffset -= 5;
            platforms.forEach(platform => {
                platform.position.x +=5
            })
            bgs.forEach(bg => {
                bg.position.x += 3
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

    if (scrollOffset > 3000) console.log('WIN') 
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