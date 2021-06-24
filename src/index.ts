import './env';
import loadWebcashDetail from './webcash_detail';

export const sum = (a: number, b: number) => {
  if ('development' === process.env.NODE_ENV) {
    console.log('boop');
  }
  return a + b;
};

loadWebcashDetail();
