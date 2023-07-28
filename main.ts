/// <reference path="./Bat.ts" />

function on_update_interval() {
    bat1.on_update()
    bat2.on_update()
}


function createBat (startLocation: tiles.Location) : Enemies.Bat {
    const scene = game.currentScene();
    const bat = new Enemies.Bat()
    bat.Register(scene)
    tiles.placeOnTile(bat, startLocation)
    return bat
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
game.onUpdateInterval(33, on_update_interval)
