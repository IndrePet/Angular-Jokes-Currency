import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  public conversion: string = '';
  public amount: number = 0;
  public loading = true;
  public error = false;
  public currencies: string[] = [];
  public currencyFrom: string = '';
  public currencyTo: string = '';

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.loadCurrencies();
  }

  public convert() {
    this.loading = true;
    this.currencyService
      .getConversion(this.amount, this.currencyFrom, this.currencyTo)
      .subscribe({
        next: (result) => {
          this.conversion = Number(result.rates[this.currencyTo]).toFixed(2);
          this.loading = false;
        },
        error: () => {
          this.error = true;
        },
      });
  }

  public loadCurrencies() {
    this.currencyService.getCurrencies().subscribe({
      next: (result) => {
        Object.keys(result).forEach((e) => this.currencies.push(e));
      },
    });
  }

  public start() {
    this.convert();
  }
}
