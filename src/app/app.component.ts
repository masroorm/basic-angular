import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'interview-angular';
  someNumber: number = 0;
  constructor() {}

  public increment() {
    this.someNumber++;
  }
}
