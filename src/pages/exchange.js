import React, { useState, useEffect } from 'react';
import HistoryOrder from '../components/HistoryOrder';
import MarketHistory from '../components/MarketHistory';
// import MarketNews from '../components/MarketNews';
import MarketPairs from '../components/MarketPairs';
import MarketTrade from '../components/MarketTrade';
// import OrderBook from '../components/OrderBook';
import TradingChart from '../components/TradingChart';

const Exchange = () => {

  const [tab, setTab] = useState('BINANCE:BTCUSD');
  const [eth, setEth] = useState({askPrice:'', priceChangePercent:''});
  const [btc, setBtc] = useState({askPrice:'', priceChangePercent:''});
  const [xrp, setXrp] = useState({askPrice:'', priceChangePercent:''});
  const [doge, setDoge] = useState({askPrice:'', priceChangePercent:''});
  const [link, setLink] = useState({askPrice:'', priceChangePercent:''});
  const [ltc, setLtc] = useState({askPrice:'', priceChangePercent:''});

  const getEthDataFromApi = async () => {
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

    getEthDataFromApi()

    const interval = setInterval(() => {
      getEthDataFromApi()
     },1000)
       
     return () => clearInterval(interval)

  }, []);
    
    return (
      <>
        <div className="container-fluid mtb15 no-fluid">
          <div className="row sm-gutters">
            <div className="col-sm-12 col-md-2" style={{height:'800px', overflowY:'auto'}}>
              <MarketPairs changeContract={setTab} eth={eth} btc={btc} xrp={xrp} doge={doge} link={link} ltc={ltc}/>
            </div>
            <div className="col-sm-12 col-md-8">
              <TradingChart symbol={tab} />          
            </div>
            <div className="col-md-2" style={{height:'800px', overflowY:'auto'}}>
              <MarketTrade symbol={tab} eth={eth} btc={btc} xrp={xrp} doge={doge} link={link} ltc={ltc}/>
            </div>
            <div className="col-md-10">
              <HistoryOrder />
            </div>
            <div className="col-md-2">
              <MarketHistory />
            </div>
            {/* <div className="col-12">
              Title
            </div>
            <div className="col-md-5">
              <OrderBook />
            </div>
            <div className="col-md-5">
              <MarketNews />
            </div> */}
          </div>
        </div>
      </>
    );
}

export default Exchange;
