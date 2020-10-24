let height = 0
input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 30; index++) {
        height = randint(100, 200)
        if (height <= 150) {
            basic.showNumber(height)
            basic.showString("short person")
            if (height >= 151 && height <= 170) {
                basic.showNumber(height)
                basic.showString("medium height")
            } else {
                basic.showNumber(height)
                basic.showString("tall person")
            }
        }
    }
})
