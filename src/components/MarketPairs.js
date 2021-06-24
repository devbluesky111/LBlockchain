import React from 'react';

export default function MarketPairs({changeContract, btc, eth, xrp, doge, link, ltc}) {

  return (
    <>
      <div className="market-pairs">
        <div className="input-group">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              <i className="icon ion-md-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-describedby="inputGroup-sizing-sm"
          />
        </div>
        <h5 className="market-pairs-header">Hyper Contract</h5>
            <table className="table" size="sm">
              <tbody>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:BTCUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> BTC/USD
                  </td>
                  <td>{btc.askPrice}</td>
                  <td className={(btc.priceChangePercent > 0) ? `text-success` : `text-danger`}>{btc.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:ETHUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/USD
                  </td>
                  <td>{eth.askPrice}</td>
                  <td className={(eth.priceChangePercent > 0) ? `text-success` : `text-danger`}>{eth.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:XRPUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/USD
                  </td>
                  <td>{xrp.askPrice}</td>
                  <td className={(xrp.priceChangePercent > 0) ? `text-success` : `text-danger`}>{xrp.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:DOGEUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> DOGE/USD
                  </td>
                  <td>{doge.askPrice}</td>
                  <td className={(doge.priceChangePercent > 0) ? `text-success` : `text-danger`}>{doge.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:LINKUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> LINK/USD
                  </td>
                  <td>{link.askPrice}</td>
                  <td className={(link.priceChangePercent > 0) ? `text-success` : `text-danger`}>{link.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:LTCUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/USD
                  </td>
                  <td>{ltc.askPrice}</td>
                  <td className={(ltc.priceChangePercent > 0) ? `text-success` : `text-danger`}>{ltc.priceChangePercent}%</td>
                </tr>
              </tbody>
            </table>
      </div>
    </>
  );
}
