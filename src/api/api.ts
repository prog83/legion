import axios from 'axios';

import { RawWebcashDetail } from './types';

export function apiWebcashDetail() {
  return axios.get<Array<RawWebcashDetail>>(
    'https://legionua.api.enes.tech/reports/webcash_detail/',
    {
      headers: { Authorization: `Key ${process.env.APPLICATION_KEY}` },
      params: {
        format: 'json',
        office_id: '1',
        from_date: '2020-11-01T00:00:00+03',
        to_date: '2020-12-01T00:00:00+03',
      },
    }
  );
}
