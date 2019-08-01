import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to my project cbndxcbnd';
  typ = 'text';
  placehold = 'Enter your name here';
  val = 0;
  myfunction(ev: any) {
    console.log(ev.target.value);
  }
  keyIsUp(ev: any) {
    console.log(console);
    this.title = ev.target.value;
  }
  setVal(val: number) {

    if (val === 1) {
      this.val = val;
    } else if (val === 2) {
      this.val = val;
    } else if (val === 3) {
      this.val = val;
    } else {
      this.val = val;
    }
  }
}
