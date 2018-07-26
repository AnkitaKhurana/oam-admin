export function login(formData) {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: '/createToken',
      authenticated: false,
      types: [
        'LOGIN',
        'LOGIN_SUCCEEDED',
        'LOGIN_FAILED'
      ],
      method: 'POST',
      json: formData
    }
  };
}

export function getUsers() {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: '/users',
      authenticated: true,
      types: [
        'FETCH_USERS',
        'FETCH_USERS_SUCCEEDED',
        'FETCH_USERS_FAILED'
      ],
      method: 'GET'
    }
  };
}

export function deleteUser(id) {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: `/users/${id}`,
      authenticated: true,
      types: [
        'DELETE_USER',
        'DELETE_USER_SUCCEEDED',
        'DELETE_USER_FAILED'
      ],
      method: 'DELETE'
    }
  };
}

export function tokenExpired() {
  return { type: 'TOKEN_EXPIRED' };
}

export function tokenValidated() {
  return { type: 'TOKEN_VALIDATED' };
}

export function activePageChanged(page) {
  return {
    type: 'ACTIVE_PAGE_CHANGED',
    payload: page
  };
}
