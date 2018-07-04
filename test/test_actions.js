import test from 'tape';
// import sinon from 'sinon';
import reducer from '../src/reducers/index';
var redux = require('redux');
const tempTokenValid = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsInNjb3BlIjoiYWRtaW4iLCJpYXQiOjE1Mjk3NzM1NzEsImV4cCI6MTY4NzU2MTU3MX0.ZywZaau_67h1ZuhAnEeTMPUOQrM45JUyuoPOa9S_dkg';
const tempTokenInvalid = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM3MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';


test('checkToken Action', (t) => {
  const checkTokenAction = {
    type: 'CHECK_TOKEN',
    result: {
      token: tempTokenValid,
      currentTime: new Date().getTime() / 1000
    }
  };
  const store = redux.createStore(reducer, {});
  store.dispatch(checkTokenAction);
  const actual = store.getState();
  const expected = {
    items: '',
    isAuthentic: true
  };
  const message = 'checkToken returns true auth with valid token';
  t.deepEqual(actual.temp, expected, message);
  t.end();
});

test('checkToken Action', (t) => {
  const checkTokenAction = {
    type: 'CHECK_TOKEN',
    result: {
      token: tempTokenInvalid,
      currentTime: new Date().getTime() / 1000
    }
  };
  const store = redux.createStore(reducer, {});
  store.dispatch(checkTokenAction);
  const actual = store.getState();
  const expected = {
    items: '',
    isAuthentic: false
  };
  const message = 'checkToken returns false auth with Invalid token';
  t.deepEqual(actual.temp, expected, message);
  t.end();
});
