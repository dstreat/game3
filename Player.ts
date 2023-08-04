namespace SpriteKind {
    export const Weapon = SpriteKind.create()
}

namespace Pawns {   
    export class Player extends Pawn {
        sword: Sprite

        constructor() {
            super(img`
            . . . . . b b b b b b . . . . . 
            . . . . b b b b b b b b . . . . 
            . . d . b e e e e e e b . d . . 
            . . d b e e e e e e e e b d . . 
            . . d d e d 9 d d 9 d e d d . . 
            . . d d e d e d d e d e d d . . 
            . . b d d d d d d d d d d b . . 
            . . . b c d d e e d d c b . . . 
            . . . b c b d d d d b c b . . . 
            . . b b b b b b b b b b b . . . 
            . b d d b b b b b b b b d d b . 
            . d d d d b e e e e b d d d d . 
            . d d d e e e b b e e e d d d . 
            . b d b b b e e e e b b b d b . 
            . b c c b b b b b b b b c c b . 
            . b c c e e e c c e e e c c b . 
            `);
    
            this.AddDirectionAnim(Direction.Left, [img`
                . . . . . . b b b b . . . . . .
                . . . e e e e b b b b b . . . .
                . . e e e e e e b b d b b b . .
                . . . e e e e e e d d b b b b .
                . . . d 9 d d e d d d b b b b b
                . d d d e d d e d d b b b b . .
                . . . d d d d d d b b b . . . .
                . . . d d d d b b b b . . . . .
                . . . . b b b b b b b b . . . .
                . . . b b b d d b c b c b . . .
                . . . b b b d b b c b c b b . .
                . . . e b b b b b c b c b b . .
                . . . e e e e b b c b c b b . .
                . . . b b b b b b c b c b b . .
                . . . . . . e b b c b c b b . .
                . . . . . e e e c b b b c b . .
            `,img`
                . . . . . . b b b b . . . . . .
                . . . e e e e b b b b b . . . .
                . . e e e e e e b b d b b b . .
                . . . e e e e e e d d b b b b .
                . . . d 9 d d e d d d b b b b b
                . d d d e d d e d d b b b b . .
                . . . d d d d d d b b b . . . .
                . . . d d d d b b b b . . . . .
                . . . . b b b b b c b b . . . .
                . . d b b b c b b c b b b . . .
                . d d b b b c b b b c b b b . .
                . . . e b b b c b b c b b b . .
                . . . e e e e b c b b c b b . .
                . . . b b b b b c b b c b b . .
                . . . . e e e . b c b b c b . .
                . . . e e e e . . b c b b b . .
            `,img`
                . . . . . . b b b b . . . . . .
                . . . e e e e b b b b b . . . .
                . . e e e e e e b b d b b b . .
                . . . e e e e e e d d b b b b .
                . . . d 9 d d e d d d b b b b b
                . d d d e d d e d d b b b b . .
                . . . d d d d d d b b b . . . .
                . . . d d d d b b b b . . . . .
                . . . . b b b b b b b b . . . .
                . . . b b b d d b c b c b . . .
                . . . b b b d b b c b c b b . .
                . . . e b b b b b c b c b b . .
                . . . e e e e b b c b c b b . .
                . . . b b b b b b c b c b b . .
                . . . . . . e b b c b c b b . .
                . . . . . e e e c b b b c b . .
            `,img`
                . . . . . . b b b b . . . . . .
                . . . e e e e b b b b b . . . .
                . . e e e e e e b b d b b b . .
                . . . e e e e e e d d b b b b .
                . . . d 9 d d e d d d b b b b b
                . d d d e d d e d d b b b b . .
                . . . d d d d d d b b b . . . .
                . . . d d d d b b b b . . . . .
                . . . . b b b b b b b b . . . .
                . . . b d d b b c b b c b . . .
                . . . d d d b b c b b c b b . .
                . . . e b b b b c b b c b b . .
                . . . e e e e b c b c b b b . .
                . . . b b b b b c b c b b b . .
                . . . . e e b c b b c b b . . .
                . . . e e e b b b c b b . . . .
            `])
            this.AddDirectionAnim(Direction.Right, [img`
                . . . . . . b b b b . . . . . .
                . . . . b b b b b e e e e . . .
                . . b b b d b b e e e e e e . .
                . b b b b d d e e e e e e . . .
                b b b b b d d d e d d 9 d . . .
                . . b b b b d d e d d e d d d .
                . . . . b b b d d d d d d . . .
                . . . . . b b b b d d d d . . .
                . . . . b b b b b b b b . . . .
                . . . b c b c b d d b b b . . .
                . . b b c b c b b d b b b . . .
                . . b b c b c b b b b b e . . .
                . . b b c b c b b e e e e . . .
                . . b b c b c b b b b b b . . .
                . . b b c b c b b e . . . . . .
                . . b c b b b c e e e . . . . .
            `,img`
                . . . . . . b b b b . . . . . .
                . . . . b b b b b e e e e . . .
                . . b b b d b b e e e e e e . .
                . b b b b d d e e e e e e . . .
                b b b b b d d d e d d 9 d . . .
                . . b b b b d d e d d e d d d .
                . . . . b b b d d d d d d . . .
                . . . . . b b b b d d d d . . .
                . . . . b b c b b b b b . . . .
                . . . b b b c b b c b b b d . .
                . . b b b c b b b c b b b d d .
                . . b b b c b b c b b b e . . .
                . . b b c b b c b e e e e . . .
                . . b b c b b c b b b b b . . .
                . . b c b b c b . e e e . . . .
                . . b b b c b . . e e e e . . .
            `,img`
                . . . . . . b b b b . . . . . .
                . . . . b b b b b e e e e . . .
                . . b b b d b b e e e e e e . .
                . b b b b d d e e e e e e . . .
                b b b b b d d d e d d 9 d . . .
                . . b b b b d d e d d e d d d .
                . . . . b b b d d d d d d . . .
                . . . . . b b b b d d d d . . .
                . . . . b b b b b b b b . . . .
                . . . b c b c b d d b b b . . .
                . . b b c b c b b d b b b . . .
                . . b b c b c b b b b b e . . .
                . . b b c b c b b e e e e . . .
                . . b b c b c b b b b b b . . .
                . . b b c b c b b e . . . . . .
                . . b c b b b c e e e . . . . .
            `,img`
                . . . . . . b b b b . . . . . .
                . . . . b b b b b e e e e . . .
                . . b b b d b b e e e e e e . .
                . b b b b d d e e e e e e . . .
                b b b b b d d d e d d 9 d . . .
                . . b b b b d d e d d e d d d .
                . . . . b b b d d d d d d . . .
                . . . . . b b b b d d d d . . .
                . . . . b b b b b b b b . . . .
                . . . b c b b c b b d d b . . .
                . . b b c b b c b b d d d . . .
                . . b b c b b c b b b b e . . .
                . . b b b c b c b e e e e . . .
                . . b b b c b c b b b b b . . .
                . . . b b c b b c b e e . . . .
                . . . . b b c b b b e e e . . .
            `])
            this.AddDirectionAnim(Direction.Down, [img`
                . . . . . b b b b b b . . . . .
                . . . . b b b b b b b b . . . .
                . . d . b e e e e e e b . d . .
                . . d b e e e e e e e e b d . .
                . . d d e d 9 d d 9 d e d d . .
                . . d d e d e d d e d e d d . .
                . . b d d d d d d d d d d b . .
                . . . b c d d e e d d c b . . .
                . . . b c b d d d d b c b . . .
                . . b b b b b b b b b b b b . .
                . b d d b b b b b b b b b b b .
                . d d d d b e e e e b d d b b .
                . d d d e e e b b e e e d b b .
                . b d b b b e e e e b b c b b .
                . b c e e e b b b b b b c b b .
                . b c e e e c c c c c c c b b .
            `,img`
                . . . . . b b b b b b . . . . .
                . . . . b b b b b b b b . . . .
                . . d . b e e e e e e b . d . .
                . . d b e e e e e e e e b d . .
                . . d d e d 9 d d 9 d e d d . .
                . . d d e d e d d e d e d d . .
                . . b d d d d d d d d d d b . .
                . . . b c d d e e d d c b . . .
                . . . b c b d d d d b c b . . .
                . . b b b b b b b b b b b b . .
                . b d d b b b b b b b b d d b .
                . d d d d b e e e e b d d d d .
                . d d d e e e b b e e e d d d .
                . b d b b b e e e e b b b d b .
                . b c c b b b b b b b b c c b .
                . b c c e e e c c e e e c c b .
            `,img`
            . . . . . b b b b b b . . . . . 
            . . . . b b b b b b b b . . . . 
            . . d . b e e e e e e b . d . . 
            . . d b e e e e e e e e b d . . 
            . . d d e d 9 d d 9 d e d d . . 
            . . d d e d e d d e d e d d . . 
            . . b d d d d d d d d d d b . . 
            . . . b c d d e e d d c b . . . 
            . . . b c b d d d d b c b . . . 
            . . b b b b b b b b b b b b . . 
            . b b b b b b b b b b b d d b . 
            . b b d d b e e e e b d d d d . 
            . b b d e e e b b e e e d d d . 
            . b b c b b e e e e b b b d b . 
            . b b c b b b b b b e e e c b . 
            . b b c c c c c c c e e e c b . 
            `,img`
            . . . . . b b b b b b . . . . . 
            . . . . b b b b b b b b . . . . 
            . . d . b e e e e e e b . d . . 
            . . d b e e e e e e e e b d . . 
            . . d d e d 9 d d 9 d e d d . . 
            . . d d e d e d d e d e d d . . 
            . . b d d d d d d d d d d b . . 
            . . . b c d d e e d d c b . . . 
            . . . b c b d d d d b c b . . . 
            . . b b b b b b b b b b b b . . 
            . b d d b b b b b b b b d d b . 
            . d d d d b e e e e b d d d d . 
            . d d d e e e b b e e e d d d . 
            . b d b b b e e e e b b b d b . 
            . b c c b b b b b b b b c c b . 
            . b c c e e e c c e e e c c b . 
            `])
            this.AddDirectionAnim(Direction.Up, [img`
            . . . . . b b b b b b . . . . . 
            . . . . b b b b b b b b . . . . 
            . . d . b b b b b b b b . d . . 
            . . d b b b c b b c b b b d . . 
            . . d b b b b c c b b b b d . . 
            . . d b b b b b c b b b b d . . 
            . . b b b b b b b b b b b b . . 
            . . . c b b b b b b b b c . . . 
            . . . b c c c c c c c c b . . . 
            . . b b b b b b b b b b b b . . 
            . b b b b c b b b c b b b b b . 
            . d b b b c b b b c b b c b d . 
            . d b b b c b b c b b b c b d . 
            . b b b c b b b c b b c b b b . 
            . b b b b b b c b b b b b b b . 
            . b b b e e e b b e e e b b b . 
            `,img`
            . . . . . b b b b b b . . . . . 
            . . . . b b b b b b b b . . . . 
            . . d . b b b b b b b b . d . . 
            . . d b b b c b b c b b b d . . 
            . . d b b b b c c b b b b d . . 
            . . d b b b b b c b b b b d . . 
            . . b b b b b b b b b b b b . . 
            . . . c b b b b b b b b c . . . 
            . . . b c c c c c c c c b . . . 
            . . b b b b b b b b b b b b . . 
            . b b b b c b b c b b b b b . . 
            . b b b c b b b c b b c b d d . 
            . b b c b b b b c b b c b d d . 
            . b c b b e b b c b c b d b . . 
            . c b b e e e c b c b b b b . . 
            . b b b e e e b b b b b b . . . 
            `,img`
            . . . . . b b b b b b . . . . . 
            . . . . b b b b b b b b . . . . 
            . . d . b b b b b b b b . d . . 
            . . d b b b c b b c b b b d . . 
            . . d b b b b c c b b b b d . . 
            . . d b b b b b c b b b b d . . 
            . . b b b b b b b b b b b b . . 
            . . . c b b b b b b b b c . . . 
            . . . b c c c c c c c c b . . . 
            . . b b b b b b b b b b b b . . 
            . b b b b c b b b c b b b b b . 
            . d b b b c b b b c b b c b d . 
            . d b b b c b b c b b b c b d . 
            . b b b c b b b c b b c b b b . 
            . b b b b b b c b b b b b b b . 
            . b b b e e e b b e e e b b b . 
            `,img`
            . . . . . b b b b b b . . . . . 
            . . . . b b b b b b b b . . . . 
            . . d . b b b b b b b b . d . . 
            . . d b b b c b b c b b b d . . 
            . . d b b b b c c b b b b d . . 
            . . d b b b b b c b b b b d . . 
            . . b b b b b b b b b b b b . . 
            . . . c b b b b b b b b c . . . 
            . . . b c c c c c c c c b . . . 
            . . b b b b b b b b b b b b . . 
            . . b b b b b c b b c b b b b . 
            . d d b c b b c b b b c b b b . 
            . d d b c b b c b b b b c b b . 
            . . b d b c b c b b e b b c b . 
            . . b b b b c b c e e e b b c . 
            . . . b b b b b b e e e b b b . 
            `])
        }
    
        RegisterPlayer(sceneToRegister: scene.Scene) {
            this.Register(sceneToRegister, SpriteKind.Player)
        }

        Attack() {
            let rightOffset = 11;
            let leftOffset = -11;
            let upOffset = -16;
            let downOffset = 13;
            
            if (this.currAnimDir == Direction.Right) { 
                this.sword = sprites.create(img`
                    .......................
                    .......................
                    .......................
                    .......................
                    .......................
                    .......................
                    ........ccc............
                    ........c1c............
                    ........c1cccccccccccc.
                    bbbbddccc1111111111111c
                    bbbbdddcc111111111111c.
                    ........c1ccccccccccc..
                    ........c1c............
                    ........ccc............
                    .......................
                    .......................
                `, SpriteKind.Weapon)
                this.ExtendSword(false, rightOffset)
            } else if (this.currAnimDir == Direction.Left) {
                this.sword = sprites.create(img`
                    .......................
                    .......................
                    .......................
                    .......................
                    .......................
                    .......................
                    ............ccc........
                    ............c1c........
                    ..ccccccccccc1c........
                    .c111111111111ccdddbbbb
                    c1111111111111cccddbbbb
                    .cccccccccccc1c........
                    ............c1c........
                    ............ccc........
                    .......................
                    .......................
                `, SpriteKind.Weapon)
                this.ExtendSword(false, leftOffset)
            } else if (this.currAnimDir == Direction.Up) {
                this.sword = sprites.create(img`
                    .....c..........
                    ....c1c.........
                    ....c11c........
                    ....c11c........
                    ....c11c........
                    ....c11c........
                    ....c11c........
                    ....c11c........
                    ....c11c........
                    ....c11c........
                    ....c11c........
                    ....c11c........
                    ..ccc11ccc......
                    ..c111111c......
                    ..cccccccc......
                    .....cc.........
                    .....cd.........
                    .....dd.........
                    .....dd.........
                    .....bb.........
                    .....bb.........
                    .....bb.........
                    .....bb.........
                `, SpriteKind.Weapon)
                this.ExtendSword(true, upOffset)
            } else if (this.currAnimDir == Direction.Down) {
                this.sword = sprites.create(img`
                    ...........bbbb.
                    ...........bbbb.
                    ...........bbbb.
                    ...........bbbb.
                    ...........dd...
                    ...........dd...
                    ...........dc...
                    ...........cc...
                    ........cccccccc
                    ........c111111c
                    ........ccc11ccc
                    ..........c11c..
                    ..........c11c..
                    ..........c11c..
                    ..........c11c..
                    ..........c11c..
                    ..........c11c..
                    ..........c11c..
                    ..........c11c..
                    ..........c11c..
                    ..........c11c..
                    ...........c1c..
                    ............c...
                `, SpriteKind.Weapon)
                this.ExtendSword(true, downOffset)
            }
        }

        ExtendSword (vert: boolean, offset: number) {
            if (vert) {
                this.sword.setPosition(this.x, this.y + offset)
            } else {
                this.sword.setPosition(this.x + offset, this.y)
            }
            controller.moveSprite(this.sword, 50, 50)
            pause(250)
            sprites.destroy(this.sword)
        }
    }
}