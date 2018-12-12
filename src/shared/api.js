import coinsMock from '../shared/mock/coins';

export function fetchCoins() {
  return new Promise((resolve, reject) => {
    resolve(coinsMock);
  });
}