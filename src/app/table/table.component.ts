import { Component, Input, OnInit } from '@angular/core';
import { OrderBy, PaginationConfig, TableConfig } from './table-config.interface';
import { NgFor, NgIf } from '@angular/common';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-table',
  imports: [NgFor, NgIf,FontAwesomeModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})

export class TableComponent implements OnInit{
    @Input() config: TableConfig | undefined; 
    @Input() data: any[] = []; 

    currentOrderby: OrderBy | undefined;
    currentPagination: PaginationConfig | undefined;
    currentPage: number = 1;
    filter: {[key: string]: string} = {} // Oggetto per tenere salvati i filtri 

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
    
  }
