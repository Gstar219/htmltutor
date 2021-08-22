import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent{
  title = 'forms';
     currentNumber = '0';
    firstOperand:any = " ";
    operator:any = " ";
    waitForSecondNumber = false;
    public getNumber(v: string){
      console.log(v);
      if(this.waitForSecondNumber)
      {
        this.currentNumber = v;
        this.waitForSecondNumber = false;
      }else{
        this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += this.currentNumber;
  
      }
     
          }
    public doCalculation(op:any , secondOp:any){
             switch (op){
              case '+':
              return this.firstOperand += secondOp; 
              case '-': 
              return this.firstOperand -= secondOp; 
              case '*': 
              return this.firstOperand *= secondOp; 
              case '/': 
              return this.firstOperand /= secondOp; 
              case '=':
              return secondOp;
            } 
        
          }
        
          public getOperation(op: string){
            console.log(op);
        
            if(this.firstOperand === ""){
              this.firstOperand = Number(this.currentNumber);
        
            }else if(this.operator){
              const result = this.doCalculation(this.operator , Number(this.currentNumber))
              this.currentNumber = String(result);
              this.firstOperand = result;
            }
            this.operator = op;
            this.waitForSecondNumber = true;
        
            console.log(this.firstOperand);
        
          }
        
        
          public clear(){
            this.currentNumber = '0';
            this.firstOperand = "";
            this.operator = "";
            this.waitForSecondNumber = false;
          }
          getDecimal(){
            if(!this.currentNumber.includes('.')){
                this.currentNumber += '.'; 
            }
          }
}
