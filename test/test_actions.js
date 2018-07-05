import test from 'tape';
// import sinon from 'sinon';
import reducer from '../src/reducers/index';
import { checkToken } from '../src/actions/types';
import  { tokenIsValid }  from '../src/actions/checkToken';

const redux = require('redux');
const tempTokenValid = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsInNjb3BlIjoiYWRtaW4iLCJpYXQiOjE1Mjk3NzM1NzEsImV4cCI6MTY4NzU2MTU3MX0.ZywZaau_67h1ZuhAnEeTMPUOQrM45JUyuoPOa9S_dkg';
const tempTokenInvalid = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM3MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


test('checkToken Action Type', (t) => {
  const CheckTokenAction = {
    type: checkToken,
    result: {
      token: tempTokenValid,
      currentTime: new Date().getTime() / 1000
    }
  };
  const store = redux.createStore(reducer, {});
  store.dispatch(CheckTokenAction);
  const actual = store.getState();
  const expected = {
    items: '',
    isAuthentic: true
  };
  const message = 'checkToken returns true auth with valid token';
  t.deepEqual(actual.temp, expected, message);
  t.end();
});

test('checkToken Action Type', (t) => {
  const CheckTokenAction = {
    type: checkToken,
    result: {
      token: tempTokenInvalid,
      currentTime: new Date().getTime() / 1000
    }
  };
  const store = redux.createStore(reducer, {});
  store.dispatch(CheckTokenAction);
  const actual = store.getState();
  const expected = {
    items: '',
    isAuthentic: false
  };
  const message = 'checkToken returns false auth with Invalid token';
  t.deepEqual(actual.temp, expected, message);
  t.end();
});

test('checkToken Action should create an action to check token', (t) => {
  const currentTime = new Date().getTime() / 1000;
  const expectedAction = {
    type: checkToken,
    result: {
      token: tempTokenInvalid,
      currentTime
    }
  };
  const message = 'checkToken creates an action to check token';
  t.deepEqual(tokenIsValid(tempTokenValid, currentTime).type, expectedAction.type, message);
  t.end();
});
