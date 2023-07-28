currAnimDir = 0
mySprite = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
animation.run_movement_animation(mySprite, "h -48 h 48", 4000, True)
LastY = mySprite.y
LastX = mySprite.x

def on_update_interval():
    global currAnimDir, LastX, LastY
    if LastX - mySprite.x < 0 and currAnimDir != 1:
        animation.run_image_animation(mySprite,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            True)
        currAnimDir = 1
    elif LastX - mySprite.x > 0 and currAnimDir != 2:
        animation.run_image_animation(mySprite,
            [img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """),
                img("""
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
                """)],
            100,
            True)
        currAnimDir = 2
    LastX = mySprite.x
    LastY = mySprite.y
game.on_update_interval(33, on_update_interval)
