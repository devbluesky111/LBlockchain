import { combineReducers } from 'redux';
import authReducer from './authReducer';
import contractReducer from './contractReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    contract: contractReducer
  });
  
  export default rootReducer;