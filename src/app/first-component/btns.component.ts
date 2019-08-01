import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btns',
  template: `
  <button type="button" class="btn btn-secondary">Secondary</button>
  <button type="button" class="btn btn-success">Success</button>

  `,
  styles: []
})
export class BtnsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
