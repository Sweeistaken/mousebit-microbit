bluetooth.onBluetoothConnected(function () {
    music.playTone(698, music.beat(BeatFraction.Eighth))
})
bluetooth.onBluetoothDisconnected(function () {
    music.playTone(247, music.beat(BeatFraction.Eighth))
    music.playTone(175, music.beat(BeatFraction.Eighth))
})
function report_Y () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) <= 200) {
        if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
            return 1
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
            return 30
        } else {
            return 10
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) >= 800) {
        if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
            return -1
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
            return -30
        } else {
            return -10
        }
    } else {
        return 0
    }
}
function report_X () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) <= 200) {
        if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
            return 1
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
            return 30
        } else {
            return 10
        }
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) >= 800) {
        if (joystickbit.getButton(joystickbit.JoystickBitPin.P12)) {
            return -1
        } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P15)) {
            return -30
        } else {
            return -10
        }
    } else {
        return 0
    }
}
function report_scroll () {
    if (input.buttonIsPressed(Button.B)) {
        return 1
    } else if (input.buttonIsPressed(Button.A)) {
        return -1
    } else {
        return 0
    }
}
mouse.startMouseService()
joystickbit.initJoystickBit()
basic.forever(function () {
    mouse.send(
    report_X(),
    report_Y(),
    joystickbit.getButton(joystickbit.JoystickBitPin.P14),
    input.logoIsPressed(),
    joystickbit.getButton(joystickbit.JoystickBitPin.P13),
    report_scroll(),
    true
    )
})
