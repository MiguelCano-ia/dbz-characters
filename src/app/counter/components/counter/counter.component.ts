import {Component} from "@angular/core";

@Component({
  selector: 'app-counter', // selector: 'app-counter' is the name of the tag that we will use to insert this component in the HTML
  template: `
    <h3>Counter: {{ counter }}</h3>
    <button type="button" (click)="increment()">Incremente</button>
    <button type="button" (click)="decrement(2)">Decrement</button>
    <button type="button" (click)="reset()">Reset</button>
  `, // template: '<h1>Counter works!</h1>' is the HTML that will be rendered when we use the <app-counter> tag
})
export class CounterComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 0;

  public increment(): void {
    this.counter++;
  }

  public decrement( value: number ): void {
    this.counter -= value;
  }

  public reset(): void {
    this.counter = 10;
  }
}
