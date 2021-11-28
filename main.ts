input.onButtonPressed(Button.A, function () {
    ResetPins()
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(400)
    }
    for (let index = 0; index < 8; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playTone(262, music.beat(BeatFraction.Half))
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(200)
    }
    for (let index = 0; index < 16; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P0, 1)
    soundExpression.mysterious.play()
    basic.showString("" + (randint(1600, 2000)))
})
function ResetPins () {
    pins.digitalWritePin(DigitalPin.P0, 0)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 0)
}
input.onButtonPressed(Button.AB, function () {
    ResetPins()
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(294, music.beat(BeatFraction.Whole))
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(400)
    }
    for (let index = 0; index < 8; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(294, music.beat(BeatFraction.Half))
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(200)
    }
    for (let index = 0; index < 16; index++) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        music.playTone(294, music.beat(BeatFraction.Quarter))
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P1, 1)
    soundExpression.mysterious.play()
    basic.showString("2021")
})
input.onButtonPressed(Button.B, function () {
    ResetPins()
    for (let index = 0; index < 4; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(330, music.beat(BeatFraction.Whole))
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(400)
    }
    for (let index = 0; index < 8; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(330, music.beat(BeatFraction.Half))
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(200)
    }
    for (let index = 0; index < 16; index++) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        music.playTone(330, music.beat(BeatFraction.Quarter))
        basic.pause(50)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(100)
    }
    pins.digitalWritePin(DigitalPin.P2, 1)
    soundExpression.mysterious.play()
    basic.showString("" + (randint(2025, 3021)))
})
basic.showString("Hi Y2. Let's go!")
ResetPins()
