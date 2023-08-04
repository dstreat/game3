namespace Pawns {   
    export class Enemy extends Pawn {
        PointValue: number
        DestroyEffect: effects.ParticleEffect
        DestroyDuration: number
    
        constructor(img: Image, pointValue: number, destroyeffect: effects.ParticleEffect, destroyDuration: number) {
            super(img);
            this.PointValue = pointValue
            this.DestroyEffect = destroyeffect
            this.DestroyDuration = destroyDuration
        }
    
        RegisterEnemy(sceneToRegister: scene.Scene) {
            this.Register(sceneToRegister, SpriteKind.Enemy)
        }

        Destroy() {
            super.destroy(this.DestroyEffect, this.DestroyDuration)
        }
    }
}
