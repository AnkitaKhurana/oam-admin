import test from 'tape';
import reducer from '../src/reducers/Reducer';

test('reducer', (t) => {
  const state = reducer(undefined, {});
  t.false(state.authenticated, 'Initial state values');
  t.notOk(state.author, 'Author is null initially');
  t.end();
});

test('reducer', (t) => {
  const state = reducer(undefined, { type: 'LOGIN_SUCCEEDED' });
  t.true(state.authenticated, 'Authenticated is true after LOGIN_SUCCEEDED');
  t.end();
});

test('reducer', (t) => {
  const state = reducer({ authenticated: true }, { type: 'TOKEN_EXPIRED' });
  t.false(state.authenticated, 'Authenticated is false after TOKEN_EXPIRED');
  t.end();
});
