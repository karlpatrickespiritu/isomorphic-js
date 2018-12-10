import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Coins extends Component {
  constructor(props) {
    super(props);

    let coins
    if (__isBrowser__) {
      coins = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      coins = this.props.staticContext.data
    }

    this.state = {
      coins,
      loading: coins ? false : true,
    };
  }

  componentDidMount () {
    if (!this.state.coins) {
      this.setState(() => ({
        loading: true
      }));
      this.props.fetchInitialData(this.props.match.params.id)
        .then((coins) => this.setState(() => ({
          coins,
          loading: false,
        })))
    }
  }

  render() {
    const { loading, coins } = this.state;

    if (loading) {
      return <p>LOADING</p>
    }

    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {coins.map(({ name, symbol, circulating_supply, total_supply, cmc_rank, quote, slug }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li>
                <Link to={`/coin-info/` + symbol}>
                  <strong>Rank {cmc_rank}: {name} ({symbol})</strong>
                </Link>
              </li>
              <li>
                <a href={`https://coinmarketcap.com/currencies/` + slug} target={"_blank"}>Coinmarketcap Link</a>
              </li>
              <li>Circulating Supply: {circulating_supply}</li>
              <li>Total Supply: {total_supply}</li>
              <li>24hr volume: {quote.USD.volume_24h}</li>
              <li>24hr change: {quote.USD.percent_change_24h}</li>
              <li>Market Cap: {quote.USD.market_cap}</li>
            </ul>
          </li>
        ))}
      </ul>
    )
  }
}

export default Coins