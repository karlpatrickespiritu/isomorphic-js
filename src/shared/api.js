import requestPromise from 'request-promise';

const API_KEY = 'a0872a16-370d-4eba-bd33-206fa57992bf';

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

    requestPromise(requestOptions).then(response => {
      resolve(response.data);
    }).catch((err) => {
      reject(err);
    });
  });
}