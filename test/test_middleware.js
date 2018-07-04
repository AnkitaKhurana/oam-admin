import test from 'tape';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import Middleware from '../src/store/middleware';

import { callApi } from '../src/actions/types';
import { Api, __RewireAPI__ as RewireAPI } from '../src/store/middleware';

sinonStubPromise(sinon);


test('Middleware tests', (t) => {
  const action = { type: 'test' };
  const store = {};
  const next = sinon.spy();
  Middleware(store)(next)(action);
  t.ok(next.withArgs(action).calledOnce, 'Skips to next when type not CALL_API or FETCH_AUTHOR');
  t.end();
});


test('Middleware for type CALL_API', (t) => {
  const { FakeApi, store, dispatch } = setup();
  FakeApi.resolves({ token: tempTokenValid });
  RewireAPI.__Rewire__(Api, FakeApi);
  // console.log(Middleware.__Rewire__());
  // console.log(RewireAPI);
  // Middleware.__Rewire__('Api', FakeApi);
  // Middleware(store)(null)(testActionCreateToken);
  t.end();
   // Middleware.__ResetDependency__('Api');

});
