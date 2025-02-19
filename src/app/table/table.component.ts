import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderBy, PaginationConfig, TableConfig } from './table-config.interface';
import { NgFor, NgIf, } from '@angular/common';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PaginationPipe } from "../pagination.pipe";
import {FormsModule} from  '@angular/forms';
//import { EventEmitter } from 'stream';

@Component({
  selector: 'app-table',
  imports: [NgFor, NgIf, FontAwesomeModule, PaginationPipe, FormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit{
    @Input() config: TableConfig | undefined; 
    @Input() data: any[] = []; 
    @Input() actionsConfig: {create?: boolean; edit?: boolean; delete?: boolean} = {
      create: true,
      edit: true,
      delete: true
    }

    @Output() create = new EventEmitter<void>();
    @Output() edit = new EventEmitter<void>();
    @Output() delete = new EventEmitter<void>();

    onCreate(): void{
      this.create.emit();
    }

    onEdit(row: any): void{
      this.edit.emit(row);
    }

    onDelete(row: any): void{
      this.delete.emit(row);
    }

    currentOrderby: OrderBy | undefined;
    currentPagination: PaginationConfig = {itemsPerPage: 10, currentPage: 1};
    currentPage: number = 1;
    filter: {[key: string]: string} = {} // Oggetto per tenere salvati i filtr

    // Imposto l'ordinamento di default
    ngOnInit(): void {
      if (this.config?.currentByDefault) {
        this.currentOrderby = this.config.currentByDefault;
        this.orderData(); 
      }

         // Imposto la page di default
      if(this.config?.pagination){
        this.currentPagination = this.config.pagination;
        this.currentPage = this.config.pagination.currentPage || 1;
      }
    }

    // Applico i filtri
    doFilter(): any[]{
      if(!this.data) return [];
      return this.data.filter(riga => {
        return Object.keys(this.filter).every(key => {
          if(!riga[key]) return false;
          const valoreFiltro = this.filter[key].toLowerCase();
          const valoreRiga = riga[key].toString().toLowerCase();
          return valoreRiga.includes(valoreFiltro);
        });
      });
    }

    onFilterChange(key: string, value: any): void{
      console.log(key, value);
      this.filter[key] = value?.target?.value;
      this.currentPage = 1; // La imposto come corrente dopo il filtraggio
    }

    // Al click della colonna verifico se posso e come ordinarla
    onOrder(column: string): void{
      if (!this.config?.headers.find(c => c.key === column)?.ordinable) {
        return; // se è falso non ordino ed esco
      }
      
      // se la colonna è già stata ordinata, inverto l'ordinamento
      if(this.currentOrderby?.key === column){
        this.currentOrderby.orderby =this.currentOrderby.orderby === 'asc' ? 'desc' : 'asc';
      }

      // Se non è ancora stata ordinata, la ordino in maniera crescente
      else {
        this.currentOrderby = {key: column, orderby: 'asc'}
      }
      this.orderData(); // Effettuo l'ordinamento al click
    }

    // funzione che ordina i dati in base alla colonna e al verso selezionata
    orderData(): void{
      if (!this.currentOrderby) return;

      const { key, orderby } = this.currentOrderby;
  
      // Confronta i valori delle chiavi
      this.data.sort((a, b) => {
        if (a[key] < b[key]) return orderby === 'asc' ? -1 : 1; // Se è asc metto -1 (prima a poi b) altrimenti 1
        if (a[key] > b[key]) return orderby === 'asc' ? 1 : -1; // 
        return 0; // Se sono uguali, non cambio l'ordinamento
      });
    }
    
    // Icone degli ordinamenti
    faSort = faSort;
    faSortUp = faSortUp;
    faSortDown = faSortDown;
    // Restituisce l'icona di ordinamento per una colonna
    getIconOrderedBy(column: string): any{
      if(this.currentOrderby?.key === column){
        return this.currentOrderby.orderby === 'asc' ? this.faSortUp : this.faSortDown;
      }
      return this.faSort //Icona di default
    }

    //Cambio pagina
    changePage(page: number): void{
      if(page < 1 || page > this.getNumberPage()) return;
      this.currentPage = page;    
    }
  
    // Numero totale della pagine
    getNumberPage(){
    if(!this.currentPagination?.itemsPerPage) return 1;
      return Math.ceil(this.data.length / this.currentPagination.itemsPerPage);
    }
    
    // Numero di pagine necessarie per la paginazione
    getPage(): number[]{
      const numberPage = this.getNumberPage();
      return Array.from({length: numberPage}, (_, i) => i + 1);
      }
      

    /*
    onEdit(row: any): void{
     
      row.nome = prompt('Modifica Nome:', row.nome) || row.nome;
      row.età = Number(prompt('Modifica Età:', row.età)) || row.età;
      row.dataNascita = prompt('Modifica Data di Nascita (YYYY-MM-DD):', row.dataNascita) || row.dataNascita;
    
      row.editable = !row.editable; 
    }
     
    onCreate():void{
      const newRow = {
        id: this.data.length + 1,
        nome: 'Nuovo utente ',
        età: 0,
        dataNascita: null,
      };
      this.data.push(newRow)
      this.currentPage = 1;
    }

    onDelete(row: any): void{
      const index = this.data.indexOf(row);
      if(index !== -1){
        this.data.splice(index,1);
      }
    }
    */
  }
