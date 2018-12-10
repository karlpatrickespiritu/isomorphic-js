import React, { Component } from 'react'

class CoinInfo extends Component {
  constructor(props) {
    super(props);

    let coin
    if (__isBrowser__) {
      coin = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      coin = this.props.staticContext.data
    }

    this.state = {
      coin,
      loading: coin ? false : true,
    };
  }

  componentDidMount () {
    const symbol = this.props.match.params.id;
    if (!this.state.coin) {
      this.fetchCoinInfo(symbol)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.fetchCoinInfo(this.props.match.params.id)
    }
  }

  fetchCoinInfo(symbol) {
    this.setState(() => ({
      loading: true,
    }));
    this.props.fetchInitialData(symbol)
      .then((coin) => this.setState(() => ({
        coin,
        loading: false,
      })))
  }

  render() {
    const { loading, coin } = this.state;

    if (loading) {
      return <p>LOADING</p>
    }

    return (
      <div>
        {(() => {
          for (var key in coin) {
            const cryptoCoin = coin[key]
            return (
              <div>
                <h3>{cryptoCoin.name}</h3>
                <p><a href={cryptoCoin.urls.website[0]} target={'_blank'}>{cryptoCoin.urls.website[0]}</a></p>
                {cryptoCoin.urls.twitter && (
                  <p><a href={cryptoCoin.urls.twitter[0]} target={'_blank'}>Twitter</a></p>
                )}
                {cryptoCoin.urls.reddit && (
                  <p><a href={cryptoCoin.urls.reddit[0]} target={'_blank'}>Reddit</a></p>
                )}
                {cryptoCoin.urls.message_board && (
                  <p><a href={cryptoCoin.urls.message_board[0]} target={'_blank'}>Message Board</a></p>
                )}
              </div>
            )
          }
        })()}
      </div>
    )
  }
}

export default CoinInfo