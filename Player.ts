namespace Pawns {   
    export class Player extends Pawn {
    
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
    }
}