import {Component, Input} from '@angular/core';

@Component({
  selector: 'calc-num-button',
  templateUrl: '../abstract.button/abstract.button.component.html',
  styleUrls: ['../abstract.button/abstract.button.component.scss']
})
export class NumberButtonComponent {
  // 計算機における数字のボタン
  // 数字を示すラベル
  // 数値そのもの

  @Input() public value: number;
  @Input() public calc: any;

  get text() : string {
    return String(this.value);
  }

  public ngOnInit() : void {
    console.log(this.text);
  }

  public onClick() : void {
    console.log(this.value);
    this.calc.total += this.value;
  }

}
