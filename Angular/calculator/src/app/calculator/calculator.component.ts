import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  input=""
  result=""
  decimaladded=false
public operators = ["+", "-", "x", "÷"];
  ngOnInit(): void {
  }

  

getLastOperand()
   {
     
    let pos:any;

    //console.log(this.input)
    pos=this.input.toString().lastIndexOf("+")
    if (this.input.toString().lastIndexOf("-") > pos) pos=this.input.lastIndexOf("-")
    if (this.input.toString().lastIndexOf("*") > pos) pos=this.input.lastIndexOf("*")
    if (this.input.toString().lastIndexOf("/") > pos) pos=this.input.lastIndexOf("/")
    console.log('Last '+this.input.substr(pos+1))
    return this.input.substr(pos+1)
  } 
  presskey(num: any) {
    console.log(num)
    this.input+=num;

    console.log(this.decimaladded)
    //Do Not Allow . more than once
    if ( this.input[0] === "0" &&  this.input.length > 1) {
      this.input = this.input.slice(1);
    }
    
    if (num=="." && this.operators.lastIndexOf(num)==-1 &&this.decimaladded) {
        if (this.input !="" ) {
 
        const lastNum=this.getLastOperand()
        console.log(lastNum.lastIndexOf("."))
        if (lastNum.lastIndexOf(".")   && this.decimaladded) 
        {
          // console.log(this.input.slice(0, -1))
          this.input=this.input.slice(0, -1)
          
          return;}
      }
    }
    if(num=='.' && !this.decimaladded) this.decimaladded = true;
  }
 
  pressOperator(op: string) {
 
    //Do not allow operators more than once
    const lastKey = this.input[this.input.length - 1];
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+')  {
      return;
    }
   
    this.input = this.input + op
    this.calcAnswer();
  }
  getAnswer() {
    this.calcAnswer();
    console.log(this.result)
    this.input = this.result;
    if (this.input=="0") this.input="";
  }
  allClear() {
    this.result = '';
    this.input = '';
    this.decimaladded = false;
  }
  calcAnswer() {
    let formula = this.input;
 
    let lastKey = formula[formula.length - 1];
 
    if (lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    lastKey = formula[formula.length - 1];
 
    if (lastKey === '/' || lastKey === '*' || lastKey === '-' || lastKey === '+' || lastKey === '.')  {
      formula=formula.substr(0,formula.length - 1);
    }
 
    console.log("Formula " +formula);
    this.result = eval(formula);
  }
}
