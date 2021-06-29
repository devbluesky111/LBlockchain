import api from '../../@utils/api';

import {
  GET_CONTRACT,
  GET_CONTRACTS,
  GET_CONTRACT_HISTORY,
  CREATE_BUY_CONTRACT,
  CREATE_SELL_CONTRACT,
  CLOSE_CONTRACT,
  GET_RATE
} from './types';

// Get Contracts
export const getContracts = () => async dispatch => {
  try {
    const res = await api.get('/contracts');
    dispatch({
      type: GET_CONTRACTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Get Contract Histories
export const getContractHistory = () => async dispatch => {
  try {
    const res = await api.get('/contracts/history');
    dispatch({
      type: GET_CONTRACT_HISTORY,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Add Contract
export const createBuyContract = postData => async dispatch => {
  try {
    const res = await api.post('/contracts/order/open', postData)

    dispatch({
      type: CREATE_BUY_CONTRACT,
      payload: res.data.result
    });
    const orderTime = res.data.result.orderTime*1000;
    const id = res.data.result._id;
    setTimeout(() => {
      console.log('initiated')
      dispatch(closeContract(id))
    }, orderTime);

  } catch (err) {
    console.log(err);
  }
};

// Add Contract
export const createSellContract = postData => async dispatch => {
  try {
    const res = await api.post('/contracts/order/sell', postData);

    dispatch({
      type: CREATE_SELL_CONTRACT,
      payload: res.data.result
    });
    const orderTime = res.data.result.orderTime*1000;
    const id = res.data.result._id;
    setTimeout(() => {
      console.log('initiated')
      dispatch(closeContract(id))
    }, orderTime);
  } catch (err) {
    console.log(err);
  }
};

// Get Contract
export const getContract = id => async dispatch => {
  try {
    const res = await api.get(`/contracts/${id}`);
    dispatch({
      type: GET_CONTRACT,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Close Contract
export const closeContract = id => async dispatch => {
  try {
    await api.put(`/contracts/${id}`);
    dispatch({
      type: CLOSE_CONTRACT,
      payload: id
    });
  } catch (err) {
    console.log(err);
  }
};

export const getRateFromApi = () => async dispatch => {
  try {
    const rateData = {};
    // ETH
    const ethResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT");
    const ethJson = await ethResponse.json()
    rateData.eth = {
      askPrice: parseFloat(ethJson.askPrice).toPrecision(6),
      priceChangePercent: parseFloat(ethJson.priceChangePercent).toFixed(2)
    }
    // BTC
    const btcResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT");
    const btcJson = await btcResponse.json();
    rateData.btc = {
      askPrice : parseFloat(btcJson.askPrice).toPrecision(6),
      priceChangePercent : parseFloat(btcJson.priceChangePercent).toFixed(2)
    }
    // XRP
    const xrpResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=XRPUSDT");
    const xrpJson = await xrpResponse.json();
    rateData.xrp = {
      askPrice : parseFloat(xrpJson.askPrice).toPrecision(6),
      priceChangePercent : parseFloat(xrpJson.priceChangePercent).toFixed(2)
    }
    // DOGE
    const dogeResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=DOGEUSDT");
    const dogeJson = await dogeResponse.json();
    rateData.doge = {
      askPrice : parseFloat(dogeJson.askPrice).toPrecision(6),
      priceChangePercent : parseFloat(dogeJson.priceChangePercent).toFixed(2)
    }
    // LINK
    const linkResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=LINKUSDT");
    const linkJson = await linkResponse.json();
    rateData.link = {
      askPrice : parseFloat(linkJson.askPrice).toPrecision(6),
      priceChangePercent : parseFloat(linkJson.priceChangePercent).toFixed(2)
    }
    // LTC
    const ltcResponse = await fetch("https://api.binance.com/api/v3/ticker/24hr?symbol=LTCUSDT");
    const ltcJson = await ltcResponse.json();
    rateData.ltc = {
      askPrice : parseFloat(ltcJson.askPrice).toPrecision(6),
      priceChangePercent : parseFloat(ltcJson.priceChangePercent).toFixed(2)
    }
    dispatch({
      type: GET_RATE,
      payload: rateData
    });
  } catch (err) {
    console.log(err);
  }
};