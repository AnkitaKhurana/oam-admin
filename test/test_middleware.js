import test from 'tape';
import sinon from 'sinon';
import sinonStubPromise from 'sinon-stub-promise';
import Middleware from '../src/store/middleware';

sinonStubPromise(sinon);


test('Middleware tests', (t) => {
  const action = { type: 'test' };
  const store = {};
  const next = sinon.spy();
  Middleware(store)(next)(action);
  t.ok(next.withArgs(action).calledOnce, 'Skips to next when type not CALL_API or FETCH_AUTHOR');
  t.end();
});
