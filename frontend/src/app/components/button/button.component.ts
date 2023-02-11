import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string | undefined;
  @Output() btnClick = new EventEmitter();
  constructor() {}

  onClick() {
    this.btnClick.emit();
  }
}
