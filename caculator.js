/*   const display1=document.querySelector('.display')
 const btn =display.querySelectorall('.number');
 const e
 btn.addEventListener('click', (e) => {
    if (e.target.matches('input')) {
        const key = e.target
        const action = key.dataset.action
        const keyContent = key.value
        const displayedNum = display.value
    }
   })
   if (!action) {
    if (displayedNum === '0') {
      display.value = keyContent
    } else {
      display.value = displayedNum + keyContent
    }
  }  
   */

  
   const display1=document.querySelector('.display');
 const number1=document.querySelectorAll('.number');
 const operation=document.querySelectorAll('.operator');

 const equal1=document.querySelector('.equal');
  const clear1=document.querySelector('.clear');
 let dis1num='';
let dis2num='';
 let result=null;

let haveDot=false;
//checking if there is dot in our number
 number1.forEach(number=>{
     number.addEventListener('click',(e)=>{
        if(e.target.innerText==='.'&& !havedot){
            havedot=true;
        }
        else if(e.target.innerText==='.'&& havedot ){
            return;
      }
         dis1num += e.target.innerText;
         display1.innerText=dis1num;
     })
 }) 
operation.forEach(operation=>{operation.addEventListener('click',(e)=>{
    if(!dis1num)result;
    haveDot=false;
    const operaname=e.target.innerText;
    if(dis2num){
        mathOperation();
    }
    else{
        result=parseFloat(dis1num)
    }
    console.log(result);
})})
//clear
/* document.querySelector("#clear").addEventListener("click",()=>{
    document.querySelector("#display").value="";
})
//numbers
const one=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="1"
    }
    else{
        (document.querySelector("#display").value +="1")
    }
}
const two=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="2"
    }
    else{
        (document.querySelector("#display").value +="2")
    }
}
const three=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="3"
    }
    else{
        (document.querySelector("#display").value +="3")
    }
}
const four=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="4"
    }
    else{
        (document.querySelector("#display").value +="4")
    }
}
const five=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="5"
    }
    else{
        (document.querySelector("#display").value +="5")
    }
}
const six=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="6"
    }
    else{
        (document.querySelector("#display").value +="6")
    }
}
const seven=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="7"
    }
    else{
        (document.querySelector("#display").value +="7")
    }
}
const eight=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="8"
    }
    else{
        (document.querySelector("#display").value +="8")
    }
}
const nine=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="9"
    }
    else{
        (document.querySelector("#display").value +="9")
    }
}
const zero=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="0"
    }
    else{
        (document.querySelector("#display").value +="0")
    }
}
const dot=()=>{
    if (document.querySelector("#display").value=="")
    {
        document.querySelector("#display").value ="."
    } 
    else{
        (document.querySelector("#display").value +=".")
    }
}
//checking if there is dot in our number
const display1=document.querySelector('#display');
if (!display1.includes(".")) {
    display.textContent = display1 + '.'
  } */
  /* const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')
class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
  }
  clear() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
}

delete() {
}

appendNumber(number) {
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
          calculator.appendNumber(button.innerText)
          calculator.updateDisplay()
        })
      })
      if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
}

chooseOperation(operation) {
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
          calculator.chooseOperation(button.innerText)
          calculator.updateDisplay()
        })
      })
      if (this.currentOperand === '') return
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
}

compute() {
    equalsButton.addEventListener('click', button => {
        calculator.compute()
        calculator.updateDisplay()
      })
      let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }
    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
    deleteButton.addEventListener('click', button => {
        calculator.clear()
        calculator.updateDisplay()
      })

}

updateDisplay() {
    if (this.operation != null) {
        this.previousOperandTextElement.innerText =
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
          this.currentOperandTextElement.innerText =
      this.getDisplayNumber(this.currentOperand)
    if (this.operation != null) {
      this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
    } else {
      this.previousOperandTextElement.innerText = ''
    }
  }
}}
 */


// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
   }
   
   // This function display values
   function display(value) {
       var p=document.getElementById("result").value;
            document.getElementById("result").value += value;
            if ( p === "." && decimalAdded==true ) {
              return
              } 
              else{
                  return p=""
              }
}
    
   // This function evaluates the expression and return result
   function calculate() {

    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
   }
   
   