import React, { Component } from 'react'

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

    console.log(coins);

    if (loading) {
      return <p>LOADING</p>
    }

    return (
      <ul style={{display: 'flex', flexWrap: 'wrap'}}>
        {coins.map(({ name, symbol, circulating_supply, total_supply, cmc_rank, quote }) => (
          <li key={name} style={{margin: 30}}>
            <ul>
              <li>Rank {cmc_rank}: {name} ({symbol})</li>
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