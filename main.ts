input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            # # # # #
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 2; index++) {
        basic.showLeds(`
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            # . # . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            . # . # .
            `)
    }
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
	
})
