import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  getCurrencies(): Observable<{}> {
    return this.http.get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json'
    );
  }
  getCurrencyDetails(): Observable<{}> {
    return this.http.get(
      'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/btc.json'
    );
  }
}
