// running animation sprite


class Player {
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
            y: 1
        }

        this.img = standRightImg;
        this.frames = 0;
        this.sprites = {
            stand: {
                right: standRightImg,
                left: standLeftImg
            },
            run: {
                right: runRightImg,
                left: runLeftImg
            }
        };

        this.currentSprite = this.sprites.stand.right;
    }

    draw() {
        // ctx.fillStyle = 'red';
        // ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
        ctx.drawImage(
            this.currentSprite,
            177 * this.frames,
            0,
            177,
            400,
            this.position.x, this.position.y, this.width, this.height)

    }
}