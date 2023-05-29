import {Component, Input, OnInit} from '@angular/core';
import {Table} from "primeng/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data: any[] = [];
  @Input() cols: any[] = [];
  @Input() filterCols: any[] = [];

  ngOnInit(): void {
  }

  clear(table: Table) {
    table.clear();
  }
}
