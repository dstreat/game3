/// <reference path="./Bat.ts" />

function on_update_interval() {
    bat1.on_update()
    bat2.on_update()
    player.on_update()
}


function createBat (startLocation: tiles.Location) : Pawns.Bat {
    const scene = game.currentScene();
    const bat = new Pawns.Bat()
    bat.RegisterEnemy(scene)
    tiles.placeOnTile(bat, startLocation)
    return bat
}

function createPlayer(startLocation: tiles.Location): Pawns.Player {
    const scene = game.currentScene();
    const player = new Pawns.Player();
    player.RegisterPlayer(scene)
    tiles.placeOnTile(player, startLocation)
    return player;
}

tiles.setCurrentTilemap(tilemap`level1`)

let bat1 = createBat(tiles.getTileLocation(8, 2))
animation.runMovementAnimation(
    bat1,
    "h -48 h 48",
    4000,
    true
)
let bat2 = createBat(tiles.getTileLocation(3, 4))
animation.runMovementAnimation(
    bat2,
    "v -48 v 48",
    4000,
    true
)

let player = createPlayer(tiles.getTileLocation(0, 0))
controller.moveSprite(player, 40, 40)

game.onUpdateInterval(33, on_update_interval)

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    player.Attack()
})

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite2, otherSprite2) { 
    let playerSprite = otherSprite2 as Pawns.Player;
    playerSprite.OnEnemyOverlap(sprite2.x, sprite2.y)
})
