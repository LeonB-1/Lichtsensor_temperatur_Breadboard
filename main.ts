basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 1000) {
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) > 30) {
        pins.digitalWritePin(DigitalPin.P3, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P3, 0)
    }
})
basic.forever(function () {
	
})
