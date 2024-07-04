// running animation sprite RIGHT

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
        this.sprites = {
            stand: {
                right: standRightImg,
                cropWidth:177,
                width: 66
            },
            run: {
                right: runRightImg,
                cropWidth:341,
                width: 127.875
            }
        };  

        this.currentSprite = this.sprites.stand.right;
        this.currentCropWidth = 177;
    }

    draw() {
        ctx.drawImage(
            this.currentSprite,
            this.currentCropWidth * this.frames,
            0,
            this.currentCropWidth,
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
            keys.right.pressed = true;
            player.currentCropWidth = player.sprites.run.cropWidth;
            player.currentSprite = player.sprites.run.right;
            player.width = player.sprites.run.width;
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
                keys.right.pressed = false;
                player.currentCropWidth = player.sprites.stand.cropWidth;
                player.currentSprite = player.sprites.stand.right;
                player.width = player.sprites.stand.width;


                player.currentSprite = standRightImg;

            break;
        default:
            break;
    }
})