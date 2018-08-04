import test from 'tape';
import { login, getUsers, deleteUser, getImages, tokenExpired, tokenValidated, activePageChanged } from '../src/actions/actions';

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

test('Delete User', (t) => {
  const action = deleteUser(1234);
  t.equal(action.type, 'CALL_API');
  t.equal(action.payload.endpoint, '/users/1234');
  t.true(action.payload.authenticated);
  t.equal(action.payload.types[0], 'DELETE_USER');
  t.equal(action.payload.types[1], 'DELETE_USER_SUCCEEDED');
  t.equal(action.payload.types[2], 'DELETE_USER_FAILED');
  t.equal(action.payload.method, 'DELETE');
  t.end();
});

test('Get Images', (t) => {
  const action = getImages();
  t.equal(action.type, 'CALL_API');
  t.equal(action.payload.endpoint, '/meta');
  t.true(action.payload.authenticated);
  t.equal(action.payload.types[0], 'FETCH_IMAGES');
  t.equal(action.payload.types[1], 'FETCH_IMAGES_SUCCEEDED');
  t.equal(action.payload.types[2], 'FETCH_IMAGES_FAILED');
  t.equal(action.payload.method, 'GET');
  t.end();
});

test('Token Expired', (t) => {
  const action = tokenExpired();
  t.equal(action.type, 'TOKEN_EXPIRED');
  t.end();
});

test('Token Validated', (t) => {
  const action = tokenValidated();
  t.equal(action.type, 'TOKEN_VALIDATED');
  t.end();
});

test('Active Page Changed', (t) => {
  const page = 'page';
  const action = activePageChanged(page);
  t.equal(action.type, 'ACTIVE_PAGE_CHANGED');
  t.equal(action.payload, page);
  t.end();
});
