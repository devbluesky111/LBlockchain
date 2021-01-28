import axios from 'axios';
import Backend from '../../@utils/BackendUrl';

import {
  GET_CONTRACT,
  GET_CONTRACTS,
  CREATE_CONTRACT,
  CLOSE_CONTRACT
} from './types';

// const res = await axios.get(Backend.URL + '/api/contracts', {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
// setContracts(res.data);

// Get Contracts
export const getContracts = () => async dispatch => {
  try {
    const res = await axios.get(Backend.URL + '/api/contracts', {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
    
    dispatch({
      type: GET_CONTRACTS,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

// Add Contract
export const createContract = postData => async dispatch => {
  try {
    const res = await axios.post(Backend.URL + '/api/contracts/order/open', postData, {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });

    dispatch({
      type: CREATE_CONTRACT,
      payload: res.data.result
    });
  } catch (err) {
    console.log(err);
  }
};

// Get Contract
export const getContract = id => async dispatch => {
  try {
    const res = await axios.get(Backend.URL + `/api/contracts/${id}`, {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
    dispatch({
      type: GET_CONTRACT,
      payload: res.data
    });
  } catch (err) {
    console.log(err);
  }
};

export const closeContract = id => async dispatch => {
  try {
    await axios.delete(Backend.URL + `/api/contracts/${id}`, {withCredentials: true, headers: {"Access-Control-Allow-Origin": "*"} });
    dispatch({
      type: CLOSE_CONTRACT,
      payload: id
    });
  } catch (err) {
    console.log(err);
  }
};