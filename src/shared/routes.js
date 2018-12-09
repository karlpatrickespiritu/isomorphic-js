import Home from './Home'
import Coins from './Coins'
import { fetchCoins } from './api'

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
  }
];

export default routes