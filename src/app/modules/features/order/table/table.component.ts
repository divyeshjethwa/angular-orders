import { HttpService } from './../data-service/http.service';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  headers: any = ['currency', 'value'];
  masterSelected: boolean = false;

  page: number = 1;
  count: number = 1;
  tableData: any;

  sampleDropdown = [
    {
      name: 'All column',
      value: 'all-column',
    },
    {
      name: 'All column',
      value: 'all-column',
    },
    {
      name: 'All column',
      value: 'all-column',
    },
    {
      name: 'All column',
      value: 'all-column',
    },
    {
      name: 'All column',
      value: 'all-column',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  checkUncheckAll() {
    for (var i = 0; i < this.data.length; i++) {
      this.data[i].selected = this.masterSelected;
    }
  }

  // Check All Checkbox Checked
  isAllSelected() {
    this.masterSelected = this.data.forEach((item: any) => {
      return item.selected == true;
    });
  }

  onTableDataChange(event: any) {
    this.page = event;
  }
}
