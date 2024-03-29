import React, { useState, useEffect } from 'react';
import HistoryOrder from '../components/marketHistory/HistoryOrder';
import MarketHistory from '../components/marketHistory/MarketHistory';
import MarketPairs from '../components/MarketPairs';
import MarketTrade from '../components/MarketTrade';
import TradingChart from '../components/TradingChart';

const Exchange = () => {

  const [tab, setTab] = useState('BINANCE:BTCUSDT');
  const [eth, setEth] = useState({askPrice:'', priceChangePercent:''});
  const [btc, setBtc] = useState({askPrice:'', priceChangePercent:''});
  const [xrp, setXrp] = useState({askPrice:'', priceChangePercent:''});
  const [doge, setDoge] = useState({askPrice:'', priceChangePercent:''});
  const [link, setLink] = useState({askPrice:'', priceChangePercent:''});
  const [ltc, setLtc] = useState({askPrice:'', priceChangePercent:''});

  const getRateFromApi = async () => {
    try {
      // ETHUSDT
      const ethResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT");
      const ethJson = await ethResponse.json();
      setEth({
        askPrice: parseFloat(ethJson.askPrice).toPrecision(6),
        priceChangePercent: parseFloat(ethJson.priceChangePercent).toFixed(2),
      });

      // BTCUSDT
      const btcResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT");
      const btcJson = await btcResponse.json();
      setBtc({
        askPrice: parseFloat(btcJson.askPrice).toPrecision(6),
        priceChangePercent: parseFloat(btcJson.priceChangePercent).toFixed(2),
      });

      // XRPUSDT
      const xrpResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=XRPUSDT");
      const xrpJson = await xrpResponse.json();
      setXrp({
        askPrice: parseFloat(xrpJson.askPrice).toPrecision(6),
        priceChangePercent: parseFloat(xrpJson.priceChangePercent).toFixed(2),
      });

      // DOGEUSDT
      const dogeResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=DOGEUSDT");
      const dogeJson = await dogeResponse.json();
      setDoge({
        askPrice: parseFloat(dogeJson.askPrice).toPrecision(6),
        priceChangePercent: parseFloat(dogeJson.priceChangePercent).toFixed(2),
      });

      // LINKUSDT
      const linkResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=LINKUSDT");
      const linkJson = await linkResponse.json();
      setLink({
        askPrice: parseFloat(linkJson.askPrice).toPrecision(6),
        priceChangePercent: parseFloat(linkJson.priceChangePercent).toFixed(2),
      });

      // LTCUSDT
      const ltcResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=LTCUSDT");
      const ltcJson = await ltcResponse.json();
      setLtc({
        askPrice: parseFloat(ltcJson.askPrice).toPrecision(6),
        priceChangePercent: parseFloat(ltcJson.priceChangePercent).toFixed(2),
      });
    }
    catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRateFromApi()
    const interval = setInterval(() => {
      getRateFromApi()
     },1000)
       
     return () => clearInterval(interval)

  }, []);
    
    return (
      <>
        <div className="container-fluid mtb15 no-fluid">
          <div className="row sm-gutters">
            <div className="col-sm-12 col-md-2">
              <MarketPairs changeContract={setTab} eth={eth} btc={btc} xrp={xrp} doge={doge} link={link} ltc={ltc}/>
            </div>
            <div className="col-sm-12 col-md-7">
              <TradingChart symbol={tab} />          
            </div>
            <div className="col-md-3">
              <MarketTrade symbol={tab} eth={eth} btc={btc} xrp={xrp} doge={doge} link={link} ltc={ltc} />
            </div>
            <div className="col-md-9">
              <HistoryOrder symbol={tab} eth={eth} btc={btc} xrp={xrp} doge={doge} link={link} ltc={ltc} />
            </div>
            <div className="col-md-3">
              <MarketHistory symbol={tab} />
            </div>
          </div>
        </div>
      </>
    );
}

export default Exchange;
