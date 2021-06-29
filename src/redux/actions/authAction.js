import api from '../../@utils/api';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,  
  LOGOUT,
  BALANCE_LOADED
} from './types';

// Load User
export const loadUser = () => async dispatch => {
  try {
    const res = await api.get('/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

// Load balance
export const loadBalance = balance => async dispatch => {
  try {
    dispatch({
      type: BALANCE_LOADED,
      payload: balance
    });
  } catch (err) {
   console.log(err)
  }
};

// Register User
export const register = body => async dispatch => {
  try {
    const res = await api.post('/auth/register', body);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      console.log('errors');
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

// Login User
export const login = publicAddress => async dispatch => {
  const body = { publicAddress };

  try {
    const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;
    const err_msg = errors[0].msg;
    if(err_msg === "Invalid Credentials") {
      dispatch(register(body));
    }

    if (errors) {
      console.log('errors..login')
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

// Disconnect
export const disconnect = () => ({ type: LOGOUT });
