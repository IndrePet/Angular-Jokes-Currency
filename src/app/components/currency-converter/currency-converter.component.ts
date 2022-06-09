import { Component, OnInit } from '@angular/core';
import { Currency } from 'src/app/models/currency';
import { CurrencyService } from 'src/app/services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.css'],
})
export class CurrencyConverterComponent implements OnInit {
  public conversion: Currency | null = null;
  public amount: number = 10;
  public loading = true;
  public error = false;

  constructor(private currencyService: CurrencyService) {}

  public convert(amount: number) {
    this.loading = true;
    this.currencyService.getConversion(amount).subscribe({
      next: (result) => {
        this.conversion = result;
        this.loading = false;
      },
      error: () => {
        this.error = true;
      },
    });
  }

  ngOnInit(): void {
    this.convert(this.amount);
  }

  public addOne() {
    this.amount += 1;
    this.convert(this.amount);
  }
}
