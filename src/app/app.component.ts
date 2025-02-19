import { Component } from '@angular/core';
import { ButtonConfig } from './button/button-config.interface';
import { ButtonComponent } from "./button/button.component";
import { TableConfig } from './table/table-config.interface';
import { TableComponent } from "./table/table.component";

@Component({
  selector: 'app-root',
  imports: [TableComponent, ButtonComponent],
  templateUrl: './app.component.html',
  /*template: `
    <h1>First exercise</h1>
    <app-button [config]="buttonConfig"></app-button>
  `*/
})

export class AppComponent {
    title = 'First exercise'

    buttonConfig: ButtonConfig = {
      label: 'Click',
      type: 'submit',
      disabled: false,
      style: {
        color: 'white',
        backgroundColor: 'blue',
        border: 'none'
      }
    };

    tableConfig: TableConfig = {
      headers: [
        { key: 'id', columnName: 'ID', type: 'Number', ordinable: true},
        { key: 'nome', columnName: 'Nome', type: 'String', ordinable: true},
        { key: 'eta', columnName: 'Età', type: 'Number', ordinable: true},
        { key: 'dataNascita', columnName: 'Data di Nascita', type: 'Date', ordinable: false}
      ],
      currentByDefault: {key: 'id', orderby: 'asc'}, // setto l'ordinamento di default
      pagination:{itemsPerPage: 5, currentPage: 1}
    };

    data = [
      { id: 1, nome: 'Mario Rossi', eta: 30, dataNascita: '1993-05-15', ordinable: true },
      { id: 2, nome: 'Luigi Verdi', eta: 25, dataNascita: '1998-10-22', ordinable: false },
      { id: 3, nome: 'Alessandro Neri', eta: 35, dataNascita: '1988-12-05', ordinable: false },
      { id: 4, nome: 'Laura Gialli', eta: 28, dataNascita: '1995-07-18', ordinable: true },
      { id: 5, nome: 'Marco Blu', eta: 50, dataNascita: '1973-01-30', ordinable: true },
      { id: 6, nome: 'Pietro Verde', eta: 33, dataNascita: '1990-02-24', ordinable: true },
      { id: 7, nome: 'Anna Viola', eta: 26, dataNascita: '1997-03-08', ordinable: true }
    ];
    
}