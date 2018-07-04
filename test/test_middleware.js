import test from 'tape';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';

import Middleware from '../src/store/middleware';
import { callApi } from '../src/actions/types';
import {Api, __RewireAPI__ as RewireAPI } from '../src/store/middleware';

sinonStubPromise(sinon);

const tempTokenValid = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1lQGdtYWlsLmNvbSIsInNjb3BlIjoiYWRtaW4iLCJpYXQiOjE1Mjk3NzM1NzEsImV4cCI6MTY4NzU2MTU3MX0.ZywZaau_67h1ZuhAnEeTMPUOQrM45JUyuoPOa9S_dkg';

const testActionCreateToken = {
  type: callApi,
  endpoint: '/createToken',
  authenticated: false,
  method: 'POST',
  json: {
    email: 'test@test.com',
    password: 'test'
  }
};

const setup = () => {
  const FakeApi = sinon.stub();
  const store = { dispatch: () => false };
  const dispatch = sinon.stub(store, 'dispatch');
  return { FakeApi, store, dispatch };
};

test('Middleware tests', (t) => {
  const action = { type: 'test' };
  const store = {};
  const next = sinon.spy();
  Middleware(store)(next)(action);
  t.ok(next.withArgs(action).calledOnce, 'Skips to next when type not CALL_API or FETCH_AUTHOR');
  t.end();
});


test('apiMiddleware', (t) => {
  const { FakeApi, store, dispatch } = setup();
  FakeApi.resolves({ token: tempTokenValid });
  // RewireAPI.__Rewire__('Api', FakeApi);
  console.log(Middleware.__Rewire__());
  console.log(RewireAPI);
  // Middleware.__Rewire__('Api', FakeApi);
  // Middleware(store)(null)(testActionCreateToken);
  t.end();
   // Middleware.__ResetDependency__('Api');

});
