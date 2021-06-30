import {
  GET_CONTRACT,
  GET_CONTRACTS,
  GET_CONTRACT_HISTORY,
  CREATE_BUY_CONTRACT,
  CREATE_SELL_CONTRACT,
  CLOSE_CONTRACT,
  GET_RATE
} from "../actions/types";

const initialState = {
  contracts: [],
  contract: null,
  history: [],
  rateData: {},
  loading: true,
  error: {}
};
const contractReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CONTRACTS:
      return {
        ...state,
        contracts: payload,
        loading: false
      };
      
    case GET_CONTRACT: 
      return {
        ...state,
        contract: payload,
        loading: false
      };

    case GET_CONTRACT_HISTORY:
      return {
        ...state,
        history: payload,
        loading: false
      };

    case CREATE_BUY_CONTRACT: 
      return {
        ...state,
        contracts: [payload, ...state.contracts],
        loading: false
      };

    case CREATE_SELL_CONTRACT: 
      return {
        ...state,
        contracts: [payload, ...state.contracts],
        loading: false
      };

    case CLOSE_CONTRACT:
      return {
        ...state,
        contracts: state.contracts.filter((contract) => contract._id !== payload),
        loading: false
      };

    case GET_RATE:
      return {
        ...state,
        rateData: payload,
        loading: false
      };

    default:
      return state;
  }
};

export default contractReducer;