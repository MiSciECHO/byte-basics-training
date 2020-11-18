function backup_and_turn_RIGHT_to_avoid () {
    if (Rover.readSonar(ePingUnit.Centimeters) < 10) {
        Rover.setLedColor(0xFF0000)
        Rover.stop(eStopMode.Brake)
        Rover.move_milli(eVector.Forward, 60, 1000)
        Rover.spin(eDirection.Right, 150)
        basic.pause(500)
    } else {
        Rover.setLedColor(0x00FF00)
        Rover.move(eVector.Forward, 60)
        Rover.zeroServos(eServoGroup.Wheel)
    }
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        backup_and_turn_RIGHT_to_avoid()
    }
})
input.onButtonPressed(Button.B, function () {
    Rover.stop(eStopMode.Brake)
    Rover.zeroServos(eServoGroup.All)
})
