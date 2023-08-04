namespace Pawns {
    export enum Direction {
        Left = 1,
        Right,
        Down,
        Up,
    }
    
    const ANIM_INTERVAL = 175
    
    export class Pawn extends Sprite {
        LastX: number;
        LastY: number;
        currAnimDir: number;
        directionAnims: Image[][]
        IsStopped: boolean
    
        constructor(img: Image) {
            super(img);
            this.LastX = this.x;
            this.LastY = this.y;
            this.currAnimDir = 0;
            this.IsStopped = true;
            this.directionAnims = [ [],[],[],[] ]
        }
    
        Register(sceneToRegister: scene.Scene, kind: number) {
            this.setKind(kind)
            sceneToRegister.physicsEngine.addSprite(this);
            sceneToRegister.createdHandlers
                .filter(h => h.kind == kind)
                .forEach(h => h.handler(this));
        }
    
        on_update() {
            if (this.directionAnims != null) {
                if (this.directionAnims[Direction.Right] != null && this.LastX - this.x < 0) {
                    if (this.currAnimDir != Direction.Right || this.IsStopped) {
                        animation.runImageAnimation(this, this.directionAnims[Direction.Right], ANIM_INTERVAL, true)
                        this.currAnimDir = Direction.Right
                        this.IsStopped = false
                    }
                } else if (this.directionAnims[Direction.Left] != null && this.LastX - this.x > 0) {
                    if (this.currAnimDir != Direction.Left || this.IsStopped) {
                        animation.runImageAnimation(this, this.directionAnims[Direction.Left], ANIM_INTERVAL, true)
                        this.currAnimDir = Direction.Left
                        this.IsStopped = false
                    }
                } else if (this.directionAnims[Direction.Down] != null && this.LastY - this.y < 0) {
                    if (this.currAnimDir != Direction.Down || this.IsStopped) {
                        animation.runImageAnimation(this, this.directionAnims[Direction.Down], ANIM_INTERVAL, true)
                        this.currAnimDir = Direction.Down
                        this.IsStopped = false
                    }
                } else if (this.directionAnims[Direction.Up] != null && this.LastY - this.y > 0) {
                    if (this.currAnimDir != Direction.Up || this.IsStopped) {
                        animation.runImageAnimation(this, this.directionAnims[Direction.Up], ANIM_INTERVAL, true)
                        this.currAnimDir = Direction.Up
                        this.IsStopped = false
                    }
                } else if (this.LastX == this.x && this.LastY == this.y) {
                    animation.stopAnimation(animation.AnimationTypes.ImageAnimation, this)
                    this.IsStopped = true
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
