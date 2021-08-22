import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  constructor() { }

public inputname:any
public num1:any
public num2:any

  ngOnInit(): void {
  }

 public onclick(name:any){
   console.log(name)
  }
 public onadd(op:any){
   console.log(op)
this.inputname=this.num1+this.num2


  }
  answer(eq:any){
  console.log(this.inputname)

  }
}
