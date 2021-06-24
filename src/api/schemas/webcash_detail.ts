import { array, object, string, number, date } from 'yup';

export default array()
  .ensure()
  .of(
    object({
      'Session start date': date(),
      'Session end date': date(),
      'Office name': string(),
      cashdesk: string(),
      'Cashier login': string(),
      checks: number(),
      income: number(),
      outcome: number(),
      goods: number(),
      services: number(),
      returned: number(),
      canceled: number(),
      'Total amount': number(),
    })
  );
