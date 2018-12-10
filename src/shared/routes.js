import Home from './Home'
import Coins from './Coins'
import CoinInfo from './CoinInfo'
import { fetchCoins, fetchCoinMetaData } from './api'

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/all',
    component: Coins,
    fetchInitialData: () => fetchCoins()
  },
  {
    path: '/coin-info/:id',
    component: CoinInfo,
    fetchInitialData: (path) => fetchCoinMetaData(path.split('/').pop())
  }
];

export default routes