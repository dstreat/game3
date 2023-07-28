namespace Enemies {
    export enum Direction {
        Left = 1,
        Right,
        Down,
        Up,
      }
    
    export class Enemy extends Sprite {
        LastX: number;
        LastY: number;
        currAnimDir: number;
        directionAnims: Image[][]
    
        constructor(img: Image) {
            super(img);
            this.LastX = this.x;
            this.LastY = this.y;
            this.currAnimDir = 0;
            this.directionAnims = [ [],[],[],[] ]
        }
    
        Register(sceneToRegister: scene.Scene) {
            this.setKind(SpriteKind.Enemy)
            sceneToRegister.physicsEngine.addSprite(this);
            sceneToRegister.createdHandlers
                .filter(h => h.kind == SpriteKind.Enemy)
                .forEach(h => h.handler(this));
        }
    
        on_update() {
            if (this.directionAnims != null) {
                if (this.directionAnims[Direction.Left] != null && this.LastX - this.x < 0 && this.currAnimDir != Direction.Left) {
                    animation.runImageAnimation(this, this.directionAnims[Direction.Left], 175, true)
                    this.currAnimDir = Direction.Left
                } else if (this.directionAnims[Direction.Right] != null && this.LastX - this.x > 0 && this.currAnimDir != Direction.Right) {
                    animation.runImageAnimation(this, this.directionAnims[Direction.Right], 175, true)
                    this.currAnimDir = Direction.Right
                } else if (this.directionAnims[Direction.Down] != null && this.LastY - this.y < 0 && this.currAnimDir != Direction.Down) {
                    animation.runImageAnimation(this, this.directionAnims[Direction.Down], 175, true)
                    this.currAnimDir = Direction.Down
                } else if (this.directionAnims[Direction.Up] != null && this.LastY - this.y > 0 && this.currAnimDir != Direction.Up) {
                    animation.runImageAnimation(this, this.directionAnims[Direction.Up], 175, true)
                    this.currAnimDir = Direction.Up
                }    
            }
    
            this.LastX = this.x
            this.LastY = this.y
        }
    
        AddDirectionAnim(dir: Direction, anim: Image[]) {
            this.directionAnims[dir] = anim
        }
    }
}