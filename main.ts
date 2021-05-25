input.onButtonPressed(Button.A, function () {
    if (ON == 0) {
        music.playTone(698, music.beat(BeatFraction.Quarter))
        ON = 1
        T0 = control.millis()
        sample_count = 0
    } else if (ON == 2) {
        TempoCalculo += -1000
        if (TempoCalculo <= 1000) {
            TempoCalculo = 1000
        }
        basic.showNumber(TempoCalculo / 1000)
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (ON == 0) {
        ON = 2
        basic.showString("TEMPO")
        basic.showNumber(TempoCalculo / 1000)
    } else if (ON == 2) {
        ON = 0
        basic.showIcon(IconNames.EigthNote)
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (ON == 0) {
        basic.showNumber(barulho / sample_count)
    } else if (ON == 2) {
        TempoCalculo += 1000
        basic.showNumber(TempoCalculo / 1000)
    } else {
    	
    }
})
let barulho = 0
let sample_count = 0
let T0 = 0
let ON = 0
let TempoCalculo = 0
TempoCalculo = 7000
let fundo = input.soundLevel()
basic.showIcon(IconNames.EigthNote)
basic.forever(function () {
    if (ON == 1) {
        barulho = barulho + (input.soundLevel() - fundo)
        sample_count += 1
        led.plotBarGraph(
        input.soundLevel(),
        255
        )
        if (control.millis() - T0 > TempoCalculo) {
            ON = 0
            music.playTone(698, music.beat(BeatFraction.Quarter))
            basic.pause(50)
            music.playTone(698, music.beat(BeatFraction.Quarter))
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        }
    }
})
