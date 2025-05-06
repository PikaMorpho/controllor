radio.setGroup(1)  // Set the radio group to 1 for communication with the robot

// Move forward when Button A is pressed
input.onButtonPressed(Button.A, function () {
    radio.sendString("forward")  // Send "forward" command to the robot
    basic.showArrow(ArrowNames.North)  // Show an upward arrow indicating forward movement
})

// Move backward when Button B is pressed
input.onButtonPressed(Button.B, function () {
    radio.sendString("backward")  // Send "backward" command to the robot
    basic.showArrow(ArrowNames.South)  // Show a downward arrow indicating backward movement
})

// Turn left when Button A + B is pressed
input.onButtonPressed(Button.AB, function () {
    radio.sendString("left")  // Send "left" command to the robot
    basic.showArrow(ArrowNames.West)  // Show a leftward arrow indicating left turn
})

// Turn right when tilting right
input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("right")  // Send "right" command to the robot
    basic.showArrow(ArrowNames.East)  // Show a rightward arrow indicating right turn
})

// Stop movement when the logo is pressed
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendString("stop")  // Send "stop" command to the robot
    basic.showIcon(IconNames.No)  // Show "No" icon indicating stopping
})

// Display a happy face when the controller is ready
basic.showIcon(IconNames.Happy)

