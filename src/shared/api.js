import requestPromise from 'request-promise';
import coinsMock from '../shared/mock/coins';

const API_KEY = 'a0872a16-370d-4eba-bd33-206fa57992bf'; // live

export function fetchCoins() {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      qs: {
        start: 1,
        limit: 50,
        convert: 'USD'
      },
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY
      },
      json: true,
      gzip: true
    };

    resolve(coinsMock);
    // requestPromise(requestOptions).then(response => {
    //   resolve(response.data);
    // }).catch((err) => {
    //   reject(err);
    // });
  });
}