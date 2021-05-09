let i = 0
input.onButtonPressed(Button.A, function () {
    if (i == 0) {
        soundExpression.giggle.play()
        basic.showIcon(IconNames.Heart)
    } else if (i == 1) {
        soundExpression.sad.play()
        basic.showIcon(IconNames.SmallHeart)
    } else if (i == 2) {
        soundExpression.yawn.play()
        basic.showIcon(IconNames.Rollerskate)
    } else if (i == 3) {
        soundExpression.mysterious.play()
        basic.showIcon(IconNames.TShirt)
    }
})
basic.forever(function () {
    i = randint(0, 9)
    basic.pause(200)
})
