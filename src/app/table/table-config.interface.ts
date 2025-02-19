export interface TableConfig {
    headers: ColumnConfig[]
    currentByDefault: OrderBy | undefined;
    pagination: PaginationConfig;
};

export interface ColumnConfig{
    key: string;
    columnName: string;
    type: 'String' | 'Number' | 'Date';
    ordinable?: boolean; // Indica se la tabella è ordinabile
    filtrale?: boolean; // Indica se la tabella è filtrabile o meno
}

export interface OrderBy{
    key: string;
    orderby: 'asc' | 'desc';
}

export interface PaginationConfig{
    itemsPerPage: number; // Limite di elementi per pagina
    currentPage: number; // Pagina corrente
}