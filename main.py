import randint

number = 0
number1 = 0
number11 = 0
number12 = 0
opr: List[str] = []
operatorCounter = 0
operatorValue = ""
Stage = 0
mnmnumber = 0
messages=["Something magical is happening today",
"You are a strong human",
"God loves you"]
aInUse=0
bInUse=0
oprFilled=0
num1Filled=0
num2Filled=0

def on_button_pressed_a():
  print("Starting a3:"+mnmnumber)
  if mnmnumber == 3:
    global number, number1
    number += 1
    basic.show_number(number)
    number1 = number
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
  global mnmnumber,oprFilled,num1Filled,num2Filled
  print("::"+mnmnumber+"::"+oprFilled+"::"+num1Filled+"::"+num2Filled)
  if mnmnumber == 3 and oprFilled ==0:
    oprFilled=1
    operatorCounter=0
  if mnmnumber == 3 and oprFilled ==1 and num1Filled ==0:
    num1Filled = 1
    number=0
  if mnmnumber ==3 and oprFilled ==1 and num1Filled ==1 and num2Filled==0:
    num2Filled = 1
    number = 0      
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
  print("B on_logo_pressed")  
  if mnmnumber == 3 and oprFilled == 0 :  
    global opr, operatorValue, operatorCounter, Stage
    opr = ["+", "-", ":", "x"]
    basic.show_string("" + (opr[operatorCounter]))
    operatorValue = opr[operatorCounter]
    if operatorCounter>=3: 
        operatorCounter=0 
    else :
       operatorCounter += 1
    Stage = 1
  if oprFilled ==1 and mnmnumber == 3 and num1Filled ==0:
      global number, number11
      number+=1
      basic.show_number(number)
      number11=number
  if oprFilled ==1 and num1Filled == 1 and mnmnumber ==3 and num2Filled ==0:
      global number12,number
      number +=1
      basic.show_number(number)
      number12=number
  if oprFilled == 1 and num1Filled == 1 and num2Filled == 1 and mnmnumber == 3:
      if operatorValue == "x":
        ans = number11*number12
      elif operatorValue == ":":
        ans = number11/number12
      elif operatorValue == "-":
        ans = number11-number12
      elif operatorValue == "+":
        ans = number11+number12
      else:
          basic.show_string("Error")
      basic.show_number(ans)  
  if mnmnumber == 2:
    index = randint(0,3);
    print("Index is :"+index)
    basic.show_string(messages[index])
    Stage = 1
  if mnmnumber == 1:
    ans = randint(0, 10)

input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
  if mnmnumber == 3: 
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
    print("Starting")
    global mnmnumber
    print(mnmnumber)
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
   
def on_button_pressed_a3():
    print("Starting a2 :"+mnmnumber)
    if mnmnumber ==1:
        basic.show_string("Game")
    if mnmnumber == 2:
       basic.show_string("Chat")
    if mnmnumber == 3:
       basic.show_string("Calculator")   
input.on_button_pressed(Button.A, on_button_pressed_a3)
