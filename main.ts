input.onPinPressed(TouchPin.P0, function () {
    sprite.turn(Direction.Left, 320)
    sprite.move(1)
    sprite.turn(Direction.Right, 320)
})
input.onPinPressed(TouchPin.P1, function () {
    sprite.turn(Direction.Right, 90)
    sprite.move(1)
    sprite.turn(Direction.Right, 90)
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 0)
sprite.turn(Direction.Right, 90)
basic.forever(function () {
    sprite.move(1)
    basic.pause(500)
    if (sprite.get(LedSpriteProperty.Y) == 4) {
        sprite = game.createSprite(2, 0)
        sprite.turn(Direction.Right, 90)
    }
})
