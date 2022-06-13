// amount: 10;
// base: 'GBP';
// date: '2022-06-09';
// rates: USD: 12.5425;

export interface Currency {
  amount: number;
  base: string;
  rates: Rates;
}

interface Rates {
  [key: string]: string;
}
