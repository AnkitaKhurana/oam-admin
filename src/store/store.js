import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import apiMiddleware from './apiMiddleware';
import tokenMiddleware from './tokenMiddleware';

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware, apiMiddleware, tokenMiddleware)
);

export default store;
