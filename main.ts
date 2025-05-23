input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    number += 1
    basic.showNumber(number)
    number1 = number
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    number11 += 1
    basic.showNumber(number11)
    number12 = number11
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    opr = ["+", "-", ":", "x"]
    basic.showString("" + opr[operatorCounter])
    operatorValue = opr[operatorCounter]
    operatorCounter += 1
    Stage = 1
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    if (operatorValue == "x") {
        basic.showNumber(number1 * number12)
    } else if (operatorValue == ":") {
        basic.showNumber(number1 / number12)
    } else if (operatorValue == "+") {
        basic.showNumber(number1 + number12)
    } else if (operatorValue == "-") {
        basic.showNumber(number1 - number12)
    } else {
        basic.showString("Err")
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    
    if (mnmnumber < 3) {
        mnmnumber += 1
    } else {
        mnmnumber = 0
    }
    
    if (mnmnumber == 1) {
        basic.showString("G")
    } else if (mnmnumber == 2) {
        basic.showString("C")
    } else if (mnmnumber == 3) {
        basic.showString("Ca")
    }
    
})
let mnmnumber = 0
let Stage = 0
let operatorValue = ""
let operatorCounter = 0
let opr : string[] = []
let number12 = 0
let number11 = 0
let number1 = 0
let number = 0
basic.showString("Hi")
basic.showString("Menu")
let mnm = ["CA,G,C"]
