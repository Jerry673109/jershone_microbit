def on_button_pressed_a():
    global number, number1
    number += 1
    basic.show_number(number)
    number1 = number
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global number11, number12
    number11 += 1
    basic.show_number(number11)
    number12 = number11
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global opr, operatorValue, operatorCounter, Stage
    opr = ["+", "-", ":", "x"]
    basic.show_string("" + opr[operatorCounter])
    operatorValue = opr[operatorCounter]
    operatorCounter += 1
    Stage = 1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    if operatorValue == "x":
        basic.show_number(number1 * number12)
    elif operatorValue == ":":
        basic.show_number(number1 / number12)
    elif operatorValue == "+":
        basic.show_number(number1 + number12)
    elif operatorValue == "-":
        basic.show_number(number1 - number12)
    else:
        basic.show_string("Err")
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    global mnmnumber
    if mnmnumber < 3:
        mnmnumber += 1
    else:
        mnmnumber = 0
    if mnmnumber == 1:
        basic.show_string("G")
    elif mnmnumber == 2:
        basic.show_string("C")
    elif mnmnumber == 3:
        basic.show_string("Ca")
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

mnmnumber = 0
Stage = 0
operatorValue = ""
operatorCounter = 0
opr: List[str] = []
number12 = 0
number11 = 0
number1 = 0
number = 0
basic.show_string("Hi")
basic.show_string("Menu")
mnm = ["CA,G,C"]