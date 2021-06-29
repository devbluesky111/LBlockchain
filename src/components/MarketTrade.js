import React, { useState, useEffect } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { createBuyContract } from "./../redux/actions/contractAction";
import { createSellContract } from "./../redux/actions/contractAction";

const MarketTrade = ({ createBuyContract, createSellContract, symbol, btc, eth, xrp, doge, link, ltc, auth : {balance}}) => {

  const [orderValue, setOrderValue] = useState('');
  const [orderTime, setOrderTime] = useState('');
  const [rate, setRate] = useState({askPrice:'', priceChangePercent:''});

  useEffect(() => {
    switch (symbol) {
      case 'BINANCE:BTCUSDT':
        setRate(btc);
        break;
      case 'BINANCE:ETHUSDT':
        setRate(eth);
        break;
      case 'BINANCE:XRPUSDT':
        setRate(xrp);
        break;
      case 'BINANCE:DOGEUSDT':
        setRate(doge);
        break;
      case 'BINANCE:LINKUSDT':
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
      swal({
        text: "The order value must be greater than 1 USDT. Reenter the value",
        icon: "warning",
        dangerMode: true
      })
    } else if(orderValue > 500) {
      orderIsValid = false;
      swal({
        text: "Max order value Allowed is 500 USDT. Reenter the value",
        icon: "warning",
        dangerMode: true
      })
    }
    return orderIsValid;
  }

  const orderBuy = async () => {
    if(orderValidation()){
      setTimeout(() => {
        createBuyContract({margin: orderValue, openingPrice: rate.askPrice, orderTime: orderTime, symbol: symbol});      
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
    if(orderValidation()){
      setTimeout(() => {
        createSellContract({margin: orderValue, openingPrice: rate.askPrice, orderTime: orderTime, symbol: symbol});      
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
  return (
    <>
      <div className="market-trade">
        <Tabs defaultActiveKey="trade">
          <Tab eventKey="trade" title="Trade">
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
                  <label htmlFor="orderValue" className="text-white pl-2">Order Value</label>
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
                      <span className="input-group-text">USDT</span>
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
                  <label htmlFor="availableValue" className="text-white pl-2">Available Value Per Trade</label>
                  <div className="input-group">
                    <input
                      type="text"
                      id="availableValue"
                      className="form-control"
                      placeholder="Amount"
                      readOnly
                      value={balance > 500 ? 500 : balance}
                    />
                    <div className="input-group-append">
                      <span className="input-group-text">USDT</span>
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
                <div className="row mt15">
                  <button type="submit" className="btn buy" onClick={()=> {orderBuy()}}>
                    Buy
                  </button>
                  <button type="submit" className="btn sell" onClick={()=> {orderSell()}}>
                    Sell
                  </button>
                </div>                  
              </form>
          </Tab>
        </Tabs>
      </div>
    </>
  );
}

MarketTrade.propTypes = {
  createBuyContract: PropTypes.func.isRequired,
  createSellContract: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps, {createBuyContract, createSellContract}
  )(MarketTrade);


