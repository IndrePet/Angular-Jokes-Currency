// amount: 10;
// base: 'GBP';
// date: '2022-06-09';
// rates: USD: 12.5425;

interface Rates {
  USD: number;
}

export interface Currency {
  amount: number;
  base: string;
  rates: Rates;
}
