import {
  GET_CONTRACT,
  GET_CONTRACTS,
  CREATE_CONTRACT,
  CLOSE_CONTRACT
} from "../actions/types";

const initialState = {
  contracts: [],
  contract: null,
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

    case CREATE_CONTRACT: 
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

    default:
      return state;
  }
};

export default contractReducer;