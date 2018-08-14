import test from 'tape';
import reducer from '../src/reducers/Reducer';

test('reducer', (t) => {
  const state = reducer(undefined, {});
  t.false(state.authenticated, '✓ Initial state values');
  t.notOk(state.author, '✓ Author is null initially');
  t.end();
});

test('reducer', (t) => {
  const state = reducer(undefined, { type: 'LOGIN_SUCCEEDED' });
  t.true(state.authenticated, '✓ Authenticated is true after LOGIN_SUCCEEDED');
  t.end();
});

test('reducer', (t) => {
  const state = reducer(undefined, { type: 'LOGIN_FAILED' });
  t.false(state.authenticated, '✓ Authenticated is false after LOGIN_FAILED');
  t.end();
});

test('reducer', (t) => {
  const state = reducer({ authenticated: true }, { type: 'TOKEN_EXPIRED' });
  t.false(state.authenticated, '✓ Authenticated is false after TOKEN_EXPIRED');
  t.end();
});

test('reducer', (t) => {
  const state = reducer({ authenticated: false }, { type: 'TOKEN_VALIDATED' });
  t.true(state.authenticated, '✓ Authenticated is true after OKEN_VALIDATED');
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
  t.deepEqual(state.users, users, '✓ User State stores Users after FETCH_USERS_SUCCEEDED');
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
  t.notDeepEqual(state.users, users, '✓ User State stores Users after FETCH_USERS_FAILED');
  t.end();
});


test('reducer', (t) => {
  const users = [{ name: 'user 1 ', _id: 12345654321, images: [] }, { name: 'user 2 ', _id: 12355654321, images: [{ url: 'xyz.com' }] }];
  const user = { name: 'user 1 ', _id: 12345654321, images: [] };
  const action = {
    type: 'DELETE_USER_SUCCEEDED',
    payload: {
      json: {
        results: user
      }
    }
  };
  const state = reducer({ users }, action);
  t.notDeepEqual(state.users, users, '✓ User State changed after DELETE_USER_SUCCEEDED');
  t.end();
});

test('reducer', (t) => {
  const users = [{ name: 'user 1 ', _id: 12345654321, images: [] }, { name: 'user 2 ', _id: 12355654321, images: [{ url: 'xyz.com' }] }];
  const user = { name: 'user 1 ', _id: 12345654321, images: [] };
  const action = {
    type: 'DELETE_USER_FAILED',
    payload: {
      json: {
        results: user
      }
    }
  };
  const state = reducer({ users }, action);
  t.deepEqual(state.users, users, '✓ Users State do not change after DELETE_USERS_FAILED');
  t.end();
});


test('reducer', (t) => {
  const state = reducer({ activePage: 'page' }, { type: 'ACTIVE_PAGE_CHANGED', payload: 'NewPage' });
  t.equal(state.activePage, 'NewPage', '✓ Active Page updated after ACTIVE_PAGE_CHANGED');
  t.end();
});

test('reducer', (t) => {
  const images = [{
    uuid: 'uuid',
    title: 'Title',
    platform: 'uav'
  },
  {
    uuid: 'uuid2',
    title: 'Title2',
    platform: 'uav2',
  }];
  const action = {
    type: 'FETCH_IMAGES_SUCCEEDED',
    payload: {
      json: {
        results: images
      }
    }
  };
  const state = reducer({}, action);
  t.deepEqual(state.images, images, '✓ Images State updates after FETCH_IMAGES_SUCCEEDED');
  t.end();
});

test('reducer', (t) => {
  const images = [{
    uuid: 'uuid',
    title: 'Title',
    platform: 'uav'
  },
  {
    uuid: 'uuid2',
    title: 'Title2',
    platform: 'uav2',
  }];
  const action = {
    type: 'FETCH_IMAGES_FAILED',
    payload: {
      json: {
        results: images
      }
    }
  };
  const state = reducer({}, action);
  t.notDeepEqual(state.images, images, '✓ Images State do not update after FETCH_IMAGES_FAILED');
  t.end();
});

