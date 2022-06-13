import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Currency } from '../models/currency';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  constructor(private http: HttpClient) {}
  public getConversion(amount: number, from: string, to: string) {
    return this.http.get<Currency>(`https://api.frankfurter.app/latest`, {
      params: {
        amount,
        from,
        to,
      },
    });
  }

  public getCurrencies() {
    return this.http.get(`https://api.frankfurter.app/currencies`);
  }
}
