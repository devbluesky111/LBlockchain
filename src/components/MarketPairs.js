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
        {/* <Tabs defaultActiveKey="btc">
          <Tab eventKey="btc" title="BNB Contract"> */}
            <table className="table">
              <tbody>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:BTCUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> BTC/USD
                  </td>
                  <td>{btc.askPrice}</td>
                  <td className="red">{btc.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:ETHUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> ETH/USD
                  </td>
                  <td>{eth.askPrice}</td>
                  <td className="green">{eth.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:XRPUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> XRP/USD
                  </td>
                  <td>{xrp.askPrice}</td>
                  <td className="red">{xrp.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:DOGEUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> DOGE/USD
                  </td>
                  <td>{doge.askPrice}</td>
                  <td className="red">{doge.priceChangePercent}%</td>
                </tr>
                {/* <tr className="mt15" onClick={() => {changeContract('FTX:SHIBUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> SHIB/USD
                  </td>
                  <td>0.000103</td>
                  <td className="red">-2.05%</td>
                </tr> */}
                <tr className="mt15" onClick={() => {changeContract('BINANCE:LINKUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> LINK/USD
                  </td>
                  <td>{link.askPrice}</td>
                  <td className="red">{link.priceChangePercent}%</td>
                </tr>
                <tr className="mt15" onClick={() => {changeContract('BINANCE:LTCUSD')}}>
                  <td>
                    <i className="icon ion-md-star"></i> LTC/USD
                  </td>
                  <td>{ltc.askPrice}</td>
                  <td className="red">{ltc.priceChangePercent}%</td>
                </tr>
              </tbody>
            </table>
      </div>
    </>
  );
}
