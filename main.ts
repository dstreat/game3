function on_update_interval () {
    mySprite.on_update()
}
let mySprite: Enemy = null

function createEnemy (img: Image, startLocation: tiles.Location, leftAnim: Image[], rightAnim: Image[]) : Enemy {
    const scene = game.currentScene();
    const sprite = new Enemy(img, leftAnim, rightAnim, null, null)
    sprite.setKind(SpriteKind.Enemy)
    scene.physicsEngine.addSprite(sprite);
    scene.createdHandlers
        .filter(h => h.kind == SpriteKind.Enemy)
        .forEach(h => h.handler(sprite));
    tiles.placeOnTile(sprite, startLocation)
    return sprite
}
class Enemy extends Sprite {
    LastX: number;
    LastY: number;
    currAnimDir: number;
    leftAnim: Image[]
    rightAnim: Image[]
    upAnim: Image[]
    downAnim: Image[]

    constructor(img: Image, leftAnim: Image[], rightAnim: Image[], upAnim: Image[], downAnim: Image[]) {
        super(img);
        this.leftAnim = leftAnim;
        this.rightAnim = rightAnim;
        this.upAnim = upAnim;
        this.downAnim = downAnim;
        this.LastX = this.x;
        this.LastY = this.y;
        this.currAnimDir = 0;
    }

    on_update() {
        if (this.LastX - this.x < 0 && this.currAnimDir != 1) {
            animation.runImageAnimation(this, this.leftAnim, 100, true)
            this.currAnimDir = 1
        } else if (this.LastX - this.x > 0 && this.currAnimDir != 2) {
            animation.runImageAnimation(this, this.rightAnim, 100, true)
            this.currAnimDir = 2
        } else if (this.LastY - this.y < 0 && this.currAnimDir != 3) {
            animation.runImageAnimation(this, this.downAnim, 100, true)
            this.currAnimDir = 3
        } else if (this.LastY - this.y > 0 && this.currAnimDir != 4) {
            animation.runImageAnimation(this, this.upAnim, 100, true)
            this.currAnimDir = 4
        }

        this.LastX = this.x
        this.LastY = this.y
    }
}
tiles.setCurrentTilemap(tilemap`level1`)

let batLeftAnim = [img`
                    f f f . . . . . . . . f f f . . 
                                c b b c f . . . . . . c c f f . 
                                . c b b c f . . . . . . c c f f 
                                . c c c b f . . . . . . c f c f 
                                . c c b b c f . c c . c c f f f 
                                . c b b c b f c c 3 c c 3 c f f 
                                . c b c c b f c b 3 c b 3 b f f 
                                . . c c c b b c b b b b b b c . 
                                . . . c c c c b b 1 b b b 1 c . 
                                . . . . c c b b b b b b b b b c 
                                . . . . f b b b b c b b b c b c 
                                . . . c f b b b b 1 f f f 1 b f 
                                . . c c f b b b b b b b b b b f 
                                . . . . f c b b b b b b b b f . 
                                . . . . . f c b b b b b b f . . 
                                . . . . . . f f f f f f f . . .
                `, img`
                    . . . . . . . . . . . f f f . . 
                                f f f . . . . . . . . c c f f f 
                                c b b c f . . . c c . . c c f f 
                                . c b b b f f c c 3 c c 3 c f f 
                                . c c c b b f c b 3 c b 3 b f f 
                                . c c b c b f c b b b b b b c . 
                                . c b b c b b c b b b b b b c . 
                                . c b c c c b b b 1 b b b 1 b c 
                                . . c c c c c b b b b b b b b c 
                                . . . c f b b b b c b b b c b f 
                                . . c c f b b b b 1 f f f 1 b f 
                                . . . . f c b b b b b b b b f . 
                                . . . . . f c b b b b b b f . . 
                                . . . . . . f f f f f f f . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . .
                `, img`
                    . . . . . . . . . . . . . . . . 
                                . . . . . . . . c c . . c c . . 
                                . . . . . . c c c 3 c c 3 c . . 
                                . . . . . c c c b 3 c b 3 b c . 
                                . . . . f f b b b b b b b b c . 
                                . . . . f f b b b b b b b b c c 
                                . . . f f f c b b 1 b b b 1 b c 
                                . . . f f f f b b b b b b b b c 
                                . . . b b b c c b c b b b c b f 
                                . . . c c c c f b 1 f f f 1 b f 
                                . . . c c b b f b b b b b b f . 
                                . . . c b b c c b b b b b f c c 
                                . . c b b c c f f f f f f c c c 
                                . c c c c c . . . . . . c c c . 
                                c c c c . . . . . . . c c c . . 
                                . . . . . . . . . . . . . . . .
                `, img`
                    . f f f . . . . . . . . f f f . 
                                . c b b c f . . . . . . . c f f 
                                . . c b b c f . . . . . . c c f 
                                . . c c c b f . . . . . . . f c 
                                . . c c b b f f . . . . . f f c 
                                . . c b b c b f c c . c c f f f 
                                . . c b c c b f c c c c c f f f 
                                . . . c c c b c b 3 c c 3 c f . 
                                . . . c c c c b b 3 c b 3 b c . 
                                . . . . c c b b b b b b b b c c 
                                . . . c f b b b b 1 b b b 1 b c 
                                . . c c f b b b b b b b b b b f 
                                . . . . f b b b b c b b b c b f 
                                . . . . f c b b b 1 f f f 1 f . 
                                . . . . . f c b b b b b b f . . 
                                . . . . . . f f f f f f f . . .
                `]
let batRightAnim = [img`
                    . . f f f . . . . . . . . f f f 
                                . f f c c . . . . . . f c b b c 
                                f f c c . . . . . . f c b b c . 
                                f c f c . . . . . . f b c c c . 
                                f f f c c . c c . f c b b c c . 
                                f f c 3 c c 3 c c f b c b b c . 
                                f f b 3 b c 3 b c f b c c b c . 
                                . c b b b b b b c b b c c c . . 
                                . c 1 b b b 1 b b c c c c . . . 
                                c b b b b b b b b b c c . . . . 
                                c b c b b b c b b b b f . . . . 
                                f b 1 f f f 1 b b b b f c . . . 
                                f b b b b b b b b b b f c c . . 
                                . f b b b b b b b b c f . . . . 
                                . . f b b b b b b c f . . . . . 
                                . . . f f f f f f f . . . . . .
                `, img`
                    . . f f f . . . . . . . . . . . 
                                f f f c c . . . . . . . . f f f 
                                f f c c . . c c . . . f c b b c 
                                f f c 3 c c 3 c c f f b b b c . 
                                f f b 3 b c 3 b c f b b c c c . 
                                . c b b b b b b c f b c b c c . 
                                . c b b b b b b c b b c b b c . 
                                c b 1 b b b 1 b b b c c c b c . 
                                c b b b b b b b b c c c c c . . 
                                f b c b b b c b b b b f c . . . 
                                f b 1 f f f 1 b b b b f c c . . 
                                . f b b b b b b b b c f . . . . 
                                . . f b b b b b b c f . . . . . 
                                . . . f f f f f f f . . . . . . 
                                . . . . . . . . . . . . . . . . 
                                . . . . . . . . . . . . . . . .
                `, img`
                    . . . . . . . . . . . . . . . . 
                                . . c c . . c c . . . . . . . . 
                                . . c 3 c c 3 c c c . . . . . . 
                                . c b 3 b c 3 b c c c . . . . . 
                                . c b b b b b b b b f f . . . . 
                                c c b b b b b b b b f f . . . . 
                                c b 1 b b b 1 b b c f f f . . . 
                                c b b b b b b b b f f f f . . . 
                                f b c b b b c b c c b b b . . . 
                                f b 1 f f f 1 b f c c c c . . . 
                                . f b b b b b b f b b c c . . . 
                                c c f b b b b b c c b b c . . . 
                                c c c f f f f f f c c b b c . . 
                                . c c c . . . . . . c c c c c . 
                                . . c c c . . . . . . . c c c c 
                                . . . . . . . . . . . . . . . .
                `, img`
                    . f f f . . . . . . . . f f f . 
                                f f c . . . . . . . f c b b c . 
                                f c c . . . . . . f c b b c . . 
                                c f . . . . . . . f b c c c . . 
                                c f f . . . . . f f b b c c . . 
                                f f f c c . c c f b c b b c . . 
                                f f f c c c c c f b c c b c . . 
                                . f c 3 c c 3 b c b c c c . . . 
                                . c b 3 b c 3 b b c c c c . . . 
                                c c b b b b b b b b c c . . . . 
                                c b 1 b b b 1 b b b b f c . . . 
                                f b b b b b b b b b b f c c . . 
                                f b c b b b c b b b b f . . . . 
                                . f 1 f f f 1 b b b c f . . . . 
                                . . f b b b b b b c f . . . . . 
                                . . . f f f f f f f . . . . . .
                `]
let batUpAnim = [img`
    . . f f f . . . . . . . . f f f
    . f f c c . . . . . . f c b b c
    f f c c . . . . . . f c b b c .
    f c f c . . . . . . f b c c c .
    f f f c c . c c . f c b b c c .
    f f c 3 c c 3 c c f b c b b c .
    f f b 3 b c 3 b c f b c c b c .
    . c b b b b b b c b b c c c . .
    . c 1 b b b 1 b b c c c c . . .
    c b b b b b b b b b c c . . . .
    c b c b b b c b b b b f . . . .
    f b 1 f f f 1 b b b b f c . . .
    f b b b b b b b b b b f c c . .
    . f b b b b b b b b c f . . . .
    . . f b b b b b b c f . . . . .
    . . . f f f f f f f . . . . . .
`]
mySprite = createEnemy(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, tiles.getTileLocation(8, 2), batLeftAnim, batRightAnim)


animation.runMovementAnimation(
mySprite,
"h -48 h 48",
4000,
true
)

//createBat(startLocation, movementAnimation)
game.onUpdateInterval(33, on_update_interval)
