import { Component } from '@angular/core';

@Component({
  selector: 'calc-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor() {
    // alert('hoge');
    // console.log('appComponent constructor !')    ;
  }

  // public total: number = 0;
  public calc: any = {
    total: 0
  };

}