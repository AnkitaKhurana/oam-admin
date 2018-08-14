import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import apiMiddleware from './apiMiddleware';
import tokenMiddleware from './tokenMiddleware';
import activePageMiddleware from './activePageMiddleware';
import filterImageMiddleware from './filterImageMiddleware';

const initialState = {};
const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(
    ...middleware,
    apiMiddleware,
    tokenMiddleware,
    activePageMiddleware,
    filterImageMiddleware
  )
);

export default store;
