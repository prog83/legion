export interface RawWebcashDetail {
  'Session start date': string;
  'Session end date': string;
  'Office name': string;
  Cashdesk: string;
  'Cashier login': string;
  Checks: number;
  Income: number;
  Outcome: number;
  Goods: number;
  Services: number;
  Returned: number;
  Canceled: number;
  'Total amount': number;
}

export interface CastWebcashDetail {
  'Session start date': Date;
  'Session end date': Date;
  'Office name': string;
  Cashdesk: string;
  'Cashier login': string;
  Checks: number;
  Income: number;
  Outcome: number;
  Goods: number;
  Services: number;
  Returned: number;
  Canceled: number;
  'Total amount': number;
}
