import test from 'tape';
import { login, getUsers } from '../src/actions/actions';

test('login', (t) => {
  const username = 'username';
  const password = 'password';
  const formData = {
    username,
    password
  };
  const action = login(formData);
  t.equal(action.type, 'CALL_API');
  t.equal(action.payload.endpoint, '/createToken');
  t.false(action.payload.authenticated);
  t.equal(action.payload.types[0], 'LOGIN');
  t.equal(action.payload.types[1], 'LOGIN_SUCCEEDED');
  t.equal(action.payload.types[2], 'LOGIN_FAILED');
  t.equal(action.payload.method, 'POST');
  t.deepEqual(action.payload.json, formData);
  t.end();
});


test('Get Users', (t) => {
  const action = getUsers();
  t.equal(action.type, 'CALL_API');
  t.equal(action.payload.endpoint, '/users');
  t.true(action.payload.authenticated);
  t.equal(action.payload.types[0], 'FETCH_USERS');
  t.equal(action.payload.types[1], 'FETCH_USERS_SUCCEEDED');
  t.equal(action.payload.types[2], 'FETCH_USERS_FAILED');
  t.equal(action.payload.method, 'GET');
  t.end();
});
