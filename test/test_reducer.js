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
  const state = reducer(undefined, { type: 'LOGIN_FAILED' });
  t.false(state.authenticated, 'Authenticated is false after LOGIN_FAILED');
  t.end();
});

test('reducer', (t) => {
  const state = reducer({ authenticated: true }, { type: 'TOKEN_EXPIRED' });
  t.false(state.authenticated, 'Authenticated is false after TOKEN_EXPIRED');
  t.end();
});


test('reducer', (t) => {
  const users = [{ name: 'user 1 ', _id: 12345654321, images: [] }, { name: 'user 2 ', _id: 12355654321, images: [{ url: 'xyz.com' }] }];
  const action = {
    type: 'FETCH_USERS_SUCCEEDED',
    payload: {
      json: {
        results: users
      }
    }
  };
  const state = reducer({}, action);
  t.deepEqual(state.users, users, 'User State stores Users after FETCH_AUTHOR_SUCCEEDED');
  t.end();
});


test('reducer', (t) => {
  const users = [{ name: 'user 1 ', _id: 12345654321, images: [] }, { name: 'user 2 ', _id: 12355654321, images: [{ url: 'xyz.com' }] }];
  const action = {
    type: 'FETCH_USERS_FAILED',
    payload: {
      json: {
        results: users
      }
    }
  };
  const state = reducer({}, action);
  t.notDeepEqual(state.users, users, 'User State stores Users after FETCH_AUTHOR_SUCCEEDED');
  t.end();
});
