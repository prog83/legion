// import { writeFile } from 'fs/promises';

import connection from './db';
import { apiWebcashDetail } from './api';
import { webcashDetail as schema } from './api/schemas';
import { RawWebcashDetail, CastWebcashDetail } from './api/types';

function castWebcashDetail(rawData: Array<RawWebcashDetail>) {
  const data: unknown = schema.cast(rawData);
  return data as Array<CastWebcashDetail> | undefined;
}

type RowWebcashDetail = [
  Date,
  Date,
  string,
  string,
  string,
  number,
  number,
  number,
  number,
  number,
  number,
  number,
  number
];

function transformWebcashDetail(rawData: Array<RawWebcashDetail>) {
  const data = castWebcashDetail(rawData);
  const initialValue: Array<RowWebcashDetail> = [];

  return data?.reduce((acc, curValue) => {
    const row: RowWebcashDetail = [
      curValue['Session start date'],
      curValue['Session end date'],
      curValue['Office name'],
      curValue['Cashdesk'],
      curValue['Cashier login'],
      curValue['Checks'],
      curValue['Income'],
      curValue['Outcome'],
      curValue['Goods'],
      curValue['Services'],
      curValue['Returned'],
      curValue['Canceled'],
      curValue['Total amount'],
    ];

    return [...acc, row];
  }, initialValue);
}

export default async function loadWebcashDetail() {
  try {
    const response = await apiWebcashDetail();
    const values = transformWebcashDetail(response.data);

    connection.connect();
    connection.query('INSERT INTO webcash_detail VALUES ?', [values], function(
      error,
      results
      // fields
    ) {
      if (error) throw error;
      console.log('results', results);
    });
    connection.end();

    // await writeFile('./db.json', JSON.stringify(response.data));
  } catch (error) {
    console.log(error);
  }
}
