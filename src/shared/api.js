import requestPromise from 'request-promise';
import coinsMock from '../shared/mock/coins';
import coinInfoMock from '../shared/mock/coin-info';

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

export function fetchCoinMetaData(coin = 'BTC') {
  return new Promise((resolve, reject) => {
    const requestOptions = {
      method: 'GET',
      uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
      qs: {
        symbol: coin
      },
      headers: {
        'X-CMC_PRO_API_KEY': API_KEY
      },
      json: true,
      gzip: true
    };

    resolve(coinInfoMock);

    // requestPromise(requestOptions).then(response => {
    //   console.log(response.data);
    //   resolve(response.data);
    // }).catch((err) => {
    //   reject(err);
    // });
  });
}