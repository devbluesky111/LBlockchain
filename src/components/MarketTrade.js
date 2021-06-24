import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import Backend from './../@utils/BackendUrl';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { createContract } from "./../redux/actions/contractAction";

const MarketTrade = ({ createContract, symbol, btc, eth, xrp, doge, link, ltc}) => {

  const [orderValue, setOrderValue] = useState('');
  const [orderTime, setOrderTime] = useState('');
  const [rate, setRate] = useState({askPrice:'', priceChangePercent:''});

  useEffect(() => {
    switch (symbol) {
      case 'BINANCE:BTCUSD':
        setRate(btc);
        break;
      case 'BINANCE:ETHUSD':
        setRate(eth);
        break;
      case 'BINANCE:XRPUSD':
        setRate(xrp);
        break;
      case 'BINANCE:DOGEUSD':
        setRate(doge);
        break;
      case 'BINANCE:LINKUSD':
        setRate(link);
        break;    
      default:
        setRate(ltc);
        break;
    }
  }, [symbol, btc, eth, xrp, doge, link, ltc]);

  const orderValidation = () => {
    var orderIsValid = true;
    if(orderValue < 1) {
      orderIsValid = false;
      alert('Margin must be greater than 1 USD')
    } else if(orderValue > 500) {
      orderIsValid = false;
      alert('Max. Margin Allowed 500 USD')
    }
    return orderIsValid;
  }

  const orderBuy = async () => {
    if(orderValidation()){
      setTimeout(() => {
        createContract({margin: orderValue, openingPrice: rate.askPrice, orderTime: orderTime, symbol: symbol});      
      }, 1000);
      setOrderValue('');
      setOrderTime('');
      setRate({askPrice:'', priceChangePercent:''});
    } else {      
      setOrderValue('');
      setOrderTime('');
      setRate({askPrice:'', priceChangePercent:''});
    }
  }
  
  const orderSell = async () => {
    console.log('Sell button clicked');
    const res = await axios.post(Backend.URL + '/api/contracts/order/close', {orderTime: orderTime, orderValue: orderValue, spreadRate: rate.askPrice}, {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
    console.log('sell==>', res.data);
  }
  return (
    <>
      <div className="market-trade">
        <Tabs defaultActiveKey="trade">
          <Tab eventKey="trade" title="Trade">
            <div className="d-flex justify-content-between">
                <form action="#">
                  <div className="form-row mt20">
                    <select
                      id="selectCurrency"
                      className="custom-select"
                      style={{textAlign:'center'}}
                    >
                      <option defaultValue>BNB Account</option>
                      <option>BTC Account</option>
                    </select>
                  </div>
                  <div className="form-row" style={{marginTop:'34px'}}>
                    <label htmlFor="orderValue" className="text-white pl-2">Margin</label>
                    <div className="input-group">
                      <input
                        type="number"
                        id="orderValue"
                        className="form-control"
                        placeholder="Amount"
                        value={orderValue}
                        onChange={(e) => {setOrderValue(e.target.value)}}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">USD</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-row mt20">
                    <label htmlFor="orderTime" className="text-white pl-2">Order Time</label>
                    <div className="input-group">
                      <input
                        type="number"
                        id="orderTime"
                        className="form-control"
                        placeholder="Amount"
                        value={orderTime}
                        onChange={(e) => {setOrderTime(e.target.value)}}
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">Sec</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-row mt20">
                    <label htmlFor="availableValue" className="text-white pl-2">Available Value</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="availableValue"
                        className="form-control"
                        placeholder="Amount"
                        readOnly
                        value="5000"
                      />
                      <div className="input-group-append">
                        <span className="input-group-text">USD</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-row mt20">
                    <label htmlFor="currentRate" className="text-white pl-2">Current Price &nbsp;&nbsp; ( {symbol.split(':')[1]} )</label>
                    <div className="input-group">
                      <input
                        type="text"
                        id="currentRate"
                        className="form-control"
                        placeholder="Amount"
                        readOnly
                        value={rate.askPrice}
                        required
                      />
                    </div>
                  </div>
                  {/* <div className="form-row">
                    <label className="text-white">Test</label>
                    <div className="input-group">
                      <input type="text" list="cars" />
                      <datalist id="cars">
                        <option>1 min</option>
                        <option>5 min</option>
                        <option>10 min</option>
                        <option>20 min</option>
                      </datalist>
                    </div>
                  </div> */}
                  <div className="row mt15">
                    <button type="submit" className="btn buy" onClick={()=> {orderBuy()}}>
                      Buy
                    </button>
                    <button type="submit" className="btn sell" onClick={()=> {orderSell()}}>
                      Sell
                    </button>
                  </div>                  
                </form>
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

MarketTrade.propTypes = {
  createContract: PropTypes.func.isRequired
};

export default connect(
  null, {createContract}
  )(MarketTrade);


