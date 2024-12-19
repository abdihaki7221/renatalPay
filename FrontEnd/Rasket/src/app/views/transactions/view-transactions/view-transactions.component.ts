import { CommonModule, DecimalPipe } from '@angular/common';
import { TableService } from '@/app/core/services/table.service';
import { NgbDropdownModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {
  Component,
  Directive,
  EventEmitter,
  inject,
  Input,
  NgModule,
  Output,
  ViewChildren,
  type PipeTransform,
  type QueryList,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { NgbHighlight, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { NgbdSortableHeader } from '@core/directive/sortable.directive';
import { DataTableItems, paginateData, type DataTableItemsType } from '@views/transactions/data';

export type SortColumn = keyof DataTableItemsType | '';
export type SortDirection = 'asc' | 'desc' | '';
const rotate: { [key: string]: SortDirection } = {
  asc: 'desc',
  desc: '',
  '': 'asc',
};


const compare = (v1: string | number | Date, v2: string | number | Date) => {
  if (v1 instanceof Date && v2 instanceof Date) {
    return v1.getTime() - v2.getTime(); // Compare dates by their timestamps
  }
  return v1 < v2 ? -1 : v1 > v2 ? 1 : 0;
};


export type CustomSortEvent = {
  column: SortColumn;
  direction: SortDirection;
};

@Directive({
  selector: 'th[sortable]',
  standalone: true,
  host: {
    '[class.asc]': 'direction === "asc"',
    '[class.desc]': 'direction === "desc"',
    '(click)': 'rotate()',
  },
})
export class NgbdCustomSortableHeader {
  @Input() sortable: SortColumn = '';
  @Input() direction: SortDirection = '';
  @Output() sort = new EventEmitter<CustomSortEvent>();

  rotate() {
    this.direction = rotate[this.direction];
    this.sort.emit({ column: this.sortable, direction: this.direction });
  }
}

function search(text: string, pipe: PipeTransform): DataTableItemsType[] {
  return DataTableItems.filter((transaction) => {
    const term = text.toLowerCase();
    return (
      transaction.name.toLowerCase().includes(term) ||
      pipe.transform(transaction.amount).includes(term) ||
      pipe.transform(transaction.tenantId).includes(term)
    );
  });
}



@Component({
  selector: 'app-view-transactions',
  standalone: true,
  imports: [CommonModule, NgbModule,FormsModule, NgbPaginationModule, NgbHighlight, NgbdSortableHeader, NgbDropdownModule],
  templateUrl: './view-transactions.component.html',
  styleUrls: ['./view-transactions.component.scss'],
})
export class ViewTransactionsComponent {
  filter!: string;
  page = 1;
  pageSize = 4;
  collectionSize = DataTableItems.length;
  transactions!: DataTableItemsType[];
  basicTransactions = DataTableItems.slice(0, 5);
  searchTransactions = DataTableItems.slice(0, 5);
  sortTransactions = DataTableItems.slice(0, 5);

  records$: Observable<DataTableItemsType[]>;
  total$: Observable<number>;

  activeDateFilter = 1; // Default to "Today"

  setDateFilter(filter: string) {
    // Set the active date filter based on the user's selection
    switch (filter) {
      case 'today':
        this.activeDateFilter = 1;
        // Implement logic to filter results for today
        break;
      case 'thisWeek':
        this.activeDateFilter = 2;
        // Implement logic to filter results for this week
        break;
      case 'thisMonth':
        this.activeDateFilter = 3;
        // Implement logic to filter results for this month
        break;
      case 'custom':
        this.activeDateFilter = 4;
        // Implement logic for custom date range
        break;
      default:
        break;
    }
  }

  @ViewChildren(NgbdSortableHeader) headers!: QueryList<NgbdSortableHeader<DataTableItemsType>>;

  public tableService = inject(TableService<DataTableItemsType>);
  selectedDateFilter: string | undefined;
  endDate: Date | undefined;
  startDate: Date | undefined;

  constructor(public pipe: DecimalPipe) {
    this.records$ = this.tableService.items$;
    this.total$ = this.tableService.total$;

    this.refreshTransactions();
  }

  ngOnInit(): void {
    this.tableService.setItems(DataTableItems, 5);
  }

  trackById(index: number, country: DataTableItemsType) {
    return country.id;
  }
  

  viewDetails(country: any) {
    // You can show a modal, or simply log the details
    console.log('Viewing details for:', country);
    // If you have a modal or a separate component to show details, trigger it here
  }
 
  onSort({ column, direction }: CustomSortEvent) {
    for (const header of this.headers) {
      if (header.sortable !== column) {
        header.direction = '';
      }
    }
  
    if (direction === '' || column === '') {
      this.sortTransactions = DataTableItems;
    } else {
      this.sortTransactions = [...DataTableItems].sort((a, b) => {
        const valueA = a[column as keyof DataTableItemsType];
        const valueB = b[column as keyof DataTableItemsType];
  
        if (typeof valueA === 'number' && typeof valueB === 'number') {
          const res = compare(valueA, valueB);
          return direction === 'asc' ? res : -res;
        }
        return 0;
      });
    }
  }
  

  searchFilter() {
    this.searchTransactions = search(this.filter, this.pipe);
  }

  refreshTransactions() {
    this.transactions = paginateData
      .map((transaction, i) => ({
        ...transaction,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  onCompleteSort({ column, direction }: CustomSortEvent) {
    for (const header of this.headers) {
      if (header.sortable !== column) {
        header.direction = '';
      }
    }

    this.tableService.sortColumn = column;
    this.tableService.sortDirection = direction;
  }

  filterByDate() {
    const today = new Date();
    let filteredTransactions: DataTableItemsType[] = DataTableItems;

    switch (this.selectedDateFilter) {
      case 'daily':
        const yesterday = new Date();
        yesterday.setDate(today.getDate() - 1);
        filteredTransactions = DataTableItems.filter(transaction =>
          new Date(transaction.date).getTime() >= yesterday.getTime()
        );
        break;
      case 'weekly':
        const lastWeek = new Date();
        lastWeek.setDate(today.getDate() - 7);
        filteredTransactions = DataTableItems.filter(transaction =>
          new Date(transaction.date).getTime() >= lastWeek.getTime()
        );
        break;
      case 'monthly':
        const lastMonth = new Date();
        lastMonth.setMonth(today.getMonth() - 1);
        filteredTransactions = DataTableItems.filter(transaction =>
          new Date(transaction.date).getTime() >= lastMonth.getTime()
        );
        break;
      case 'custom':
        if (this.startDate && this.endDate) {
          const start = new Date(this.startDate).getTime();
          const end = new Date(this.endDate).getTime();
          filteredTransactions = DataTableItems.filter(transaction => {
            const transactionDate = new Date(transaction.date).getTime();
            return transactionDate >= start && transactionDate <= end;
          });
        }
        break;
      default:
        break;
    }

    // Update the displayed transactions with the filtered result
    this.transactions = filteredTransactions;
  }
}
