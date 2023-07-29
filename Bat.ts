/// <reference path="Enemy.ts" />

namespace Enemies {
    export class Bat extends Enemy {
        constructor() {
            super(img`
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
            `);
    
            this.AddDirectionAnim(Direction.Left, [img`
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
        `])
            this.AddDirectionAnim(Direction.Right, [img`
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
    `])
            this.AddDirectionAnim(Direction.Down, [img`
            f . . . . . . . . . . . . . . f 
            c f . . . . . . . . . . . . f c 
            c b f . . . . . . . . . . f b c 
            c b f . . . . . . . . . . f b c 
            . c b f . . c c . c . . f b c . 
            . c b f . c 3 b c 3 c . f b c . 
            . c b f c b 3 b b 3 b c f b c . 
            . . c f c b b b b b b c f c . . 
            . . . c b b 1 b b 1 b b c . . . 
            . . . c b b b b b b b b c . . . 
            . . . c b b c b b c b b c . . . 
            . . . c b b 1 f f 1 b b c . . . 
            . . . f b b b b b b b b f . . . 
            . . . f b b b b b b b b f . . . 
            . . . . f c b b b b c f . . . . 
            . . . . . f f f f f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f . . . . . c c . c . . . . . f 
            f f f . . c 3 b c 3 c . . f f f 
            f c b f c b 3 b b 3 b c f b c f 
            f b b f c b b b b b b c f b b f 
            f c c c b b 1 b b 1 b b c c c f 
            c . . c b b b b b b b b c . . c 
            . . . c b b c b b c b b c . . . 
            . . . c b b 1 f f 1 b b c . . . 
            . . . f b b b b b b b b f . . . 
            . . . f b b b b b b b b f . . . 
            . . . . f c b b b b c f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c c . c . . . . . . 
            . . . . . c 3 b c 3 c . . . . . 
            . . . . c b 3 b b 3 b c . . . . 
            . . . . c b b b b b b c . . . . 
            . . . f b b 1 b b 1 b b f . . . 
            . f f c b b b b b b b b c f f . 
            f b f c b b c b b c b b c f b f 
            f f b c b b 1 f f 1 b b c f b f 
            f c b f b b b b b b b b f b c f 
            c c . f b b b b b b b b f . c f 
            c . . . f c b b b b c f . . c c 
            f . . . . f f f f f f . . . . c 
            f . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `])
            this.AddDirectionAnim(Direction.Up, [img`
            f . . . . . . . . . . . . . . f 
            c f . . . . . . . . . . . . f c 
            c b f . . . . . . . . . . f b c 
            c b f . . . . . . . . . . f b c 
            . c b f . . c c . c . . f b c . 
            . c b f . c b b c b c . f b c . 
            . c b f c b b b b b b c f b c . 
            . . c f c b b b b b b c f c . . 
            . . . c b b b b b b b b c . . . 
            . . . c b b b b b b b b c . . . 
            . . . c b b c b b c b b c . . . 
            . . . c b b c b b b c b c . . . 
            . . . f b b b b b b b b f . . . 
            . . . f b b b c b b b b f . . . 
            . . . . f b b c c b b f . . . . 
            . . . . . f f f c c f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f . . . . . c c . c . . . . . f 
            f f f . . c b b c b c . . f f f 
            f c b f c b b b b b b c f b c f 
            f b b f c b b b b b b c f b b f 
            f c c c b b b b b b b b c c c f 
            c . . c b b b b b b b b c . . c 
            . . . c b b c b b b c b c . . . 
            . . . c b b c b b c b b c . . . 
            . . . f b b b b b b b b f . . . 
            . . . f b b b b c b b b f . . . 
            . . . . f b b c c b b f . . . . 
            . . . . . f f f c f f . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . c c . c . . . . . . 
            . . . . . c b b c b c . . . . . 
            . . . . c b b b b b b c . . . . 
            . . . . c b b b b b b c . . . . 
            . . . f b b b b b b b b f . . . 
            . f f c b b b b b b b b c f f . 
            f b f c b b c b b c b b c f b f 
            f f b c b b c b b b c b c f b f 
            f c b f b b b b b b b b f b c f 
            c c . f b b b b c b b b f . c f 
            c . . . f b b c c b b f . . c c 
            f . . . . f c c f f f . . . . c 
            f . . . . . . . . . . . . . . f 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `])
        }
    }
}