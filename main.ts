input.onButtonPressed(Button.A, function () {
    music.playTone(698, music.beat(BeatFraction.Quarter))
    ON = 1
    T0 = control.millis()
    sample_count = 0
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(barulho / sample_count)
})
let barulho = 0
let sample_count = 0
let T0 = 0
let ON = 0
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
        if (control.millis() - T0 > 7000) {
            ON = 0
            music.playTone(698, music.beat(BeatFraction.Quarter))
            basic.pause(50)
            music.playTone(698, music.beat(BeatFraction.Quarter))
            basic.showIcon(IconNames.Happy)
        }
    }
})
