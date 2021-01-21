import { combineReducers } from 'redux';
import contractReducer from './contractReducer';

const rootReducer = combineReducers({
    contract: contractReducer
  });
  
  export default rootReducer;