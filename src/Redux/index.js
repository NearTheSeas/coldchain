import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import * as reducer from './Reducer';
import thunk from 'redux-thunk';

let store = createStore(combineReducers(reducer), compose(applyMiddleware(thunk), window.devToolsExtension
  ? window.devToolsExtension()
  : f => f));
export default store;