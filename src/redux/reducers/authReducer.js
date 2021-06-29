import {
  REGISTER_SUCCESS,
  //REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  //LOGIN_FAIL,
  LOGOUT,
  BALANCE_LOADED
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  publicAddress: '',
  nonce: '',
  balance: '',
  buttonText: 'Connect Metamask'
};

function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        publicAddress: payload.publicAddress,
        nonce: payload.nonce,
        balance: payload.balance,
        buttonText: `${payload.publicAddress.substr(0, 4)}...${payload.publicAddress.substr(-4)}`
      };
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false
      };
    case AUTH_ERROR:
    case LOGOUT:
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        publicAddress: null,
        nonce: null,
        balance: null,
        buttonText: 'Connect Metamask'
      };
    case BALANCE_LOADED:
      return {
        ...state,
        balance: payload,
        loading: false
      };
    default:
      return state;
  }
}

export default authReducer;
