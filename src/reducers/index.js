import { combineReducers } from 'redux';
import domainReducer from './domainReducer';
import clientReducer from './clientReducer';

const rootReducer = combineReducers({
  clientReducer,
  domainReducer,
});

export default rootReducer;
