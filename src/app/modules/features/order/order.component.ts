import { HttpService } from './data-service/http.service';
import { SubSink } from 'subsink';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  allCurrencies: Array<any> = [];
  allCurrencyDetails: any = [];
  private subs = new SubSink();

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.fetchDropdownData();
    this.fetchTableData();
  }

  fetchDropdownData() {
    this.subs.add(
      this.httpService.getCurrencies().subscribe((data: any) => {
        this.allCurrencies = this.convertToArray(data);
      })
    );
  }
  fetchTableData() {
    this.subs.add(
      this.httpService.getCurrencyDetails().subscribe((data: any) => {
        this.allCurrencyDetails = this.convertToArray(data.btc);
      })
    );
  }

  convertToArray(Obj: any): any {
    let newArray = [];
    let keys = Object.keys(Obj);
    let values = Object.values(Obj);
    for (let i = 0; i < keys.length; i++) {
      newArray.push({
        selected: false,
        id: Date.now().toString(36) + Math.random().toString(36),
        currency: keys[i],
        value: values[i],
      });
    }
    return newArray;
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
