import { Component } from '@angular/core';
import { ButtonConfig } from './button/button-config.interface';
import { TableConfig, actionsConfig } from './table/table-config.interface';
import { TableComponent } from "./table/table.component";
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  imports: [TableComponent, FormsModule],
  templateUrl: './app.component.html'
})

export class AppComponent {
    title = 'First exercise'
    filter: { [key: string]: string } = {}; // Oggetto per i filtri
    

    action: string[] = ['CREATE', 'EDIT', 'DELETE'];

    actions: ButtonConfig[] = [
        {
          label: 'CREATE',
          type: 'button',
          disabled: false,
          style: {
            color: 'white',
            backgroundColor: 'green',
            border: 'none'
          }
        },
        {
          label: 'EDIT',
          type: 'button',
          disabled: false,
          style: {
            color: 'white',
            backgroundColor: 'blue',
            border: 'none'
          }
        },
        {
          label: 'DELETE',
          type: 'button',
          disabled: false,
          style: {
            color: 'white',
            backgroundColor: 'red',
            border: 'none'
          }
        }
      ];

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
        { key: 'id', columnName: 'ID', type: 'Number', ordinable: true, filtrable: true},
        { key: 'nome', columnName: 'Nome', type: 'String', ordinable: true,  filtrable: true},
        { key: 'eta', columnName: 'Età', type: 'Number', ordinable: true,  filtrable: false},
        { key: 'dataNascita', columnName: 'Data di Nascita', type: 'Date', ordinable: false,  filtrable: false}
      ],
      currentByDefault: {key: 'id', orderby: 'asc'}, // setto l'ordinamento di default
      pagination:{itemsPerPage: 10, currentPage: 1},
      actions: { actions: ['EDIT', 'DELETE'] }
    };


    data = [
      { id: 1, nome: 'Mario Rossi', eta: 30, dataNascita: '1993-05-15', ordinable: true },
      { id: 2, nome: 'Luigi Verdi', eta: 25, dataNascita: '1998-10-22', ordinable: false },
      { id: 3, nome: 'Alessandro Neri', eta: 35, dataNascita: '1988-12-05', ordinable: false },
      { id: 4, nome: 'Laura Gialli', eta: 28, dataNascita: '1995-07-18', ordinable: true },
      { id: 5, nome: 'Marco Blu', eta: 50, dataNascita: '1973-01-30', ordinable: true },
      { id: 6, nome: 'Pietro Verde', eta: 33, dataNascita: '1990-02-24', ordinable: true },
      { id: 7, nome: 'Anna Viola', eta: 26, dataNascita: '1997-03-08', ordinable: true },
      { id: 8, nome: 'Giovanni Bianchi', eta: 40, dataNascita: '1983-11-13', ordinable: false },
      { id: 9, nome: 'Francesca Grigi', eta: 45, dataNascita: '1978-06-20', ordinable: true },
      { id: 10, nome: 'Stefano Rosa', eta: 38, dataNascita: '1985-09-09', ordinable: true },
      { id: 11, nome: 'Elena Gialli', eta: 29, dataNascita: '1994-04-17', ordinable: false },
      { id: 12, nome: 'Luca Fabbri', eta: 32, dataNascita: '1991-12-01', ordinable: true },
      { id: 13, nome: 'Marta Blu', eta: 27, dataNascita: '1996-07-07', ordinable: true },
      { id: 14, nome: 'Giorgio Rossi', eta: 55, dataNascita: '1968-03-25', ordinable: false },
      { id: 15, nome: 'Sofia Neri', eta: 31, dataNascita: '1992-11-03', ordinable: true },
      { id: 16, nome: 'Francesco Verde', eta: 34, dataNascita: '1989-01-11', ordinable: false },
      { id: 17, nome: 'Chiara Gialli', eta: 24, dataNascita: '1999-10-16', ordinable: true },
      { id: 18, nome: 'Antonio Grigi', eta: 42, dataNascita: '1981-04-22', ordinable: true },
      { id: 19, nome: 'Giulia Blu', eta: 37, dataNascita: '1986-08-05', ordinable: false },
      { id: 20, nome: 'Riccardo Fabbri', eta: 46, dataNascita: '1977-02-14', ordinable: true },
      { id: 21, nome: 'Sara Viola', eta: 22, dataNascita: '2001-01-29', ordinable: false },
      { id: 22, nome: 'Davide Rosa', eta: 39, dataNascita: '1984-05-09', ordinable: true },
      { id: 23, nome: 'Valentina Bianchi', eta: 48, dataNascita: '1975-03-03', ordinable: true },
      { id: 24, nome: 'Roberto Blu', eta: 53, dataNascita: '1970-11-18', ordinable: false },
      { id: 25, nome: 'Federica Neri', eta: 41, dataNascita: '1982-07-12', ordinable: true },
      { id: 26, nome: 'Marco Rossi', eta: 30, dataNascita: '1993-05-18', ordinable: true },
      { id: 27, nome: 'Arianna Grigi', eta: 26, dataNascita: '1997-11-01', ordinable: false },
      { id: 28, nome: 'Luca Neri', eta: 32, dataNascita: '1991-01-25', ordinable: true },
      { id: 29, nome: 'Giovanna Fabbri', eta: 50, dataNascita: '1973-10-17', ordinable: true },
      { id: 30, nome: 'Matteo Rosa', eta: 37, dataNascita: '1986-09-22', ordinable: false },
      { id: 31, nome: 'Claudia Bianchi', eta: 28, dataNascita: '1995-06-12', ordinable: true },
      { id: 32, nome: 'Andrea Grigi', eta: 49, dataNascita: '1974-03-05', ordinable: false },
      { id: 33, nome: 'Loredana Blu', eta: 41, dataNascita: '1982-02-27', ordinable: true },
      { id: 34, nome: 'Salvatore Gialli', eta: 36, dataNascita: '1987-09-11', ordinable: false },
      { id: 35, nome: 'Elisa Viola', eta: 33, dataNascita: '1990-12-29', ordinable: true },
      { id: 36, nome: 'Giuseppe Fabbri', eta: 29, dataNascita: '1994-08-21', ordinable: false },
      { id: 37, nome: 'Federico Neri', eta: 34, dataNascita: '1989-04-13', ordinable: true },
      { id: 38, nome: 'Francesca Gialli', eta: 43, dataNascita: '1980-02-09', ordinable: true },
      { id: 39, nome: 'Simona Blu', eta: 32, dataNascita: '1991-03-30', ordinable: true },
      { id: 40, nome: 'Alessandra Grigi', eta: 46, dataNascita: '1977-07-01', ordinable: false },
      { id: 41, nome: 'Vincenzo Viola', eta: 44, dataNascita: '1979-11-12', ordinable: true },
      { id: 42, nome: 'Clara Rosa', eta: 52, dataNascita: '1971-05-06', ordinable: true },
      { id: 43, nome: 'Alberto Bianchi', eta: 39, dataNascita: '1984-06-14', ordinable: false },
      { id: 44, nome: 'Carla Neri', eta: 38, dataNascita: '1985-02-17', ordinable: true },
      { id: 45, nome: 'Giulio Grigi', eta: 41, dataNascita: '1982-09-23', ordinable: false },
      { id: 46, nome: 'Marco Rosa', eta: 54, dataNascita: '1969-12-12', ordinable: true },
      { id: 47, nome: 'Anna Blu', eta: 32, dataNascita: '1991-10-14', ordinable: false },
      { id: 48, nome: 'Tiziana Gialli', eta: 30, dataNascita: '1993-02-18', ordinable: true },
      { id: 49, nome: 'Leonardo Viola', eta: 36, dataNascita: '1987-08-11', ordinable: true },
      { id: 50, nome: 'Rita Neri', eta: 27, dataNascita: '1996-03-05', ordinable: false }
    ];
  
    
}