import React from 'react';
import HistoryOrder from '../components/HistoryOrder';
import MarketHistory from '../components/MarketHistory';
// import MarketNews from '../components/MarketNews';
import MarketPairs from '../components/MarketPairs';
import MarketTrade from '../components/MarketTrade';
// import OrderBook from '../components/OrderBook';
import TradingChart from '../components/TradingChart';

const Exchange = () => {
    return (
      <>
        <div className="container-fluid mtb15 no-fluid">
          <div className="row sm-gutters">
            <div className="col-sm-12 col-md-2" style={{height:'800px', overflowY:'auto'}}>
              <MarketPairs />
            </div>
            <div className="col-sm-12 col-md-8">
              <TradingChart />          
            </div>
            <div className="col-md-2" style={{height:'800px', overflowY:'auto'}}>
              <MarketTrade />
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
