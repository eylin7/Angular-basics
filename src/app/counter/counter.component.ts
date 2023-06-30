import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `

  <h3>counter: {{counter}}</h3>

<button (click)="increaseBy(+1)" >+1</button>
<button (click)="reset()">reset</button>
<button (click)="increaseBy(-1)">-2</button>
`,
})
export class CounterComponent{
  public counter: number = 20;

  increaseBy(value:number): void{
    this.counter += value;
  }
   reset(): void{
    this.counter =10;
   }
}
