namespace Pawns {   
    export class Enemy extends Pawn {
    
        constructor(img: Image) {
            super(img);
        }
    
        RegisterEnemy(sceneToRegister: scene.Scene) {
            this.Register(sceneToRegister, SpriteKind.Enemy)
        }
    }
}
