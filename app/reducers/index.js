// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import calculator from './calculator';

const rootReducer = combineReducers({
  calculator,
  routing
});

export default rootReducer;
