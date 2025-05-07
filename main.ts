// Set the radio group to 1 for communication with the robot
// Move forward when Button A is pressed
input.onButtonPressed(Button.A, function () {
    // Send "forward" command to the robot
    radio.sendString("forward")
    // Show an upward arrow indicating forward movement
    basic.showArrow(ArrowNames.North)
})
// Turn left when Button A + B is pressed
input.onButtonPressed(Button.AB, function () {
    // Send "left" command to the robot
    radio.sendString("left")
    // Show a leftward arrow indicating left turn
    basic.showArrow(ArrowNames.West)
})
// Move backward when Button B is pressed
input.onButtonPressed(Button.B, function () {
    // Send "backward" command to the robot
    radio.sendString("backward")
    // Show a downward arrow indicating backward movement
    basic.showArrow(ArrowNames.South)
})
// Turn right when tilting right
input.onGesture(Gesture.TiltRight, function () {
    // Send "right" command to the robot
    radio.sendString("right")
    // Show a rightward arrow indicating right turn
    basic.showArrow(ArrowNames.East)
})
// Stop movement when the logo is pressed
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    // Send "stop" command to the robot
    radio.sendString("stop")
    // Show "No" icon indicating stopping
    basic.showIcon(IconNames.No)
})
// Set the radio group to 1 for communication with the robot
radio.setGroup(1)
basic.showLeds(`
    . . . . .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `)
