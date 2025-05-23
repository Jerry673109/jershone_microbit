let number = 0
let number1 = 0
let number11 = 0
let number12 = 0
let opr : string[] = []
let operatorCounter = 0
let operatorValue = ""
let Stage = 0
let mnmnumber = 0
let messages = ["Something magical is happening today", "You are a strong human", "God loves you"]
let aInUse = 0
let bInUse = 0
let oprFilled = 0
let num1Filled = 0
let num2Filled = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    console.log("Starting a3:" + mnmnumber)
    if (mnmnumber == 3) {
        
        number += 1
        basic.showNumber(number)
        number1 = number
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    let operatorCounter: number;
    let number: number;
    
    console.log("::" + mnmnumber + "::" + oprFilled + "::" + num1Filled + "::" + num2Filled)
    if (mnmnumber == 3 && oprFilled == 0) {
        oprFilled = 1
        operatorCounter = 0
    }
    
    if (mnmnumber == 3 && oprFilled == 1 && num1Filled == 0) {
        num1Filled = 1
        number = 0
    }
    
    if (mnmnumber == 3 && oprFilled == 1 && num1Filled == 1 && num2Filled == 0) {
        num2Filled = 1
        number = 0
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    let ans: number;
    let index: number;
    console.log("B on_logo_pressed")
    if (mnmnumber == 3 && oprFilled == 0) {
        
        opr = ["+", "-", ":", "x"]
        basic.showString("" + opr[operatorCounter])
        operatorValue = opr[operatorCounter]
        if (operatorCounter >= 3) {
            operatorCounter = 0
        } else {
            operatorCounter += 1
        }
        
        Stage = 1
    }
    
    if (oprFilled == 1 && mnmnumber == 3 && num1Filled == 0) {
        
        number += 1
        basic.showNumber(number)
        number11 = number
    }
    
    if (oprFilled == 1 && num1Filled == 1 && mnmnumber == 3 && num2Filled == 0) {
        
        number += 1
        basic.showNumber(number)
        number12 = number
    }
    
    if (oprFilled == 1 && num1Filled == 1 && num2Filled == 1 && mnmnumber == 3) {
        if (operatorValue == "x") {
            ans = number11 * number12
        } else if (operatorValue == ":") {
            ans = number11 / number12
        } else if (operatorValue == "-") {
            ans = number11 - number12
        } else if (operatorValue == "+") {
            ans = number11 + number12
        } else {
            basic.showString("Error")
        }
        
        basic.showNumber(ans)
    }
    
    if (mnmnumber == 2) {
        index = randint(0, 3)
        console.log("Index is :" + index)
        basic.showString(messages[index])
        Stage = 1
    }
    
    if (mnmnumber == 1) {
        ans = randint(0, 10)
    }
    
})
input.onGesture(Gesture.Shake, function on_gesture_shake() {
    if (mnmnumber == 3) {
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
        
    }
    
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_pressed() {
    console.log("Starting")
    
    console.log(mnmnumber)
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
input.onButtonPressed(Button.A, function on_button_pressed_a3() {
    console.log("Starting a2 :" + mnmnumber)
    if (mnmnumber == 1) {
        basic.showString("Game")
    }
    
    if (mnmnumber == 2) {
        basic.showString("Chat")
    }
    
    if (mnmnumber == 3) {
        basic.showString("Calculator")
    }
    
})
