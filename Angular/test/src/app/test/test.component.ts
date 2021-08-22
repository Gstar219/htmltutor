import { getCurrencySymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h1>
  welcome {{name}}
  </h1>
  {{ "Answer= "+sum}}
  {{name.length}}
  <h1 class="text-success">Jega in the building</h1>
  <h1 [class.text-match]="ruth">Jega in the building</h1>
  <h1 [ngStyle]="diff">Jega in the building</h1>
  {{greet}}<br/>
  <button (click)="onclick()">Greet</button>
  <button (click)="onclick()">Greet</button>
  // reference 
  <input #myInput type="text">
  <button (click)="Logmessage(myInput.value)">Log</button>
  //double way binding
  <input [(ngModel)]="name" type="text">
{{name}}
/* <h1 *ngIf="displayname; else elseBlock">
Jega in the building
</h1>
  <ng-template #elseBlock>
  <b>jega well played</b>
  </ng-template>
   */
  <div *ngIf="displayname; then thenBlock;else elseBlock"></div>
  <ng-template #thenBlock>
stay
  </ng-template>

  <ng-template #elseBlock>
waka
  </ng-template>
  <div [ngSwitch]="color">
 <div *ngSwitchcase="'red'">waa</div>
  <div *ngSwitchcase ="'yellow'">wee</div>
  <div *ngSwitchcase="'grey'">shh</div>
  <div *ngSwitchDefault>"'koshi'"</div>

  <div>
  <button class="test"(click)="numb(3)"  >3</button>
  <button class="bg-blue-500 hover:bg-yellow-100 text-black font-bold py-8 px-7 " (click)="numb(0)" >0</button>
  <button class="bg-blue-500 hover:bg-yellow-100 text-black font-bold py-8 px-7 " (click)="numb(3)" >0</button>

 </div>
  `
  

  
  ,
  styles: [`
  background-color: black
  .text-success{
    color:green
  }
  .text-error{
    color:red
  }
  .text-match{
    color:yellow
  }
  `]
})
export class TestComponent implements OnInit {
  public name=""
  public sum =2+2
  public ruth=true;
  public diff={
    color:"pink",
    fontStyle:"Bold",
    font:"open-sans"
  }
  public displayname=false
  public greet=""
  public color="yellow"

  constructor() { }

  ngOnInit(): void {
  }
onclick(){
  console.log("welcome to mysite")
  this.greet=" welcome to mysite"

}
Logmessage(value:string){
console.log(value)
}
public numb(value:any){
  console.log(value)
}
}
