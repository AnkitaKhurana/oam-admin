import test from 'tape';
import { login, fetchAuthor } from '../src/actions/actions';

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

test('fetchAuthor', (t) => {
  const action = fetchAuthor();
  t.equal(action.type, 'CALL_API');
  t.equal(action.payload.endpoint, '');
  t.false(action.payload.authenticated);
  t.equal(action.payload.types[0], 'FETCH_AUTHOR');
  t.equal(action.payload.types[1], 'FETCH_AUTHOR_SUCCEEDED');
  t.equal(action.payload.types[2], 'FETCH_AUTHOR_FAILED');
  t.equal(action.payload.method, 'GET');
  t.end();
});
