import { Component, Input } from '@angular/core';
import { ButtonConfig } from './button-config.interface';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() config: ButtonConfig = {
    label: 'Button', // Valore predefinito
    type: 'button', // Valore predefinito
    disabled: false, // Valore predefinito
    style: {
      color: 'black',
      backgroundColor: 'white',
      border: '1px solid black'
    }
  };
}