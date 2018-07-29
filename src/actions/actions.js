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

export function getImages() {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: '/meta',
      authenticated: true,
      types: [
        'FETCH_IMAGES',
        'FETCH_IMAGES_SUCCEEDED',
        'FETCH_IMAGES_FAILED'
      ],
      method: 'GET'
    }
  };
}

export function getUserImages(id) {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: `/users/${id}`,
      authenticated: true,
      types: [
        'FETCH_USER_IMAGES',
        'FETCH_USER_IMAGES_SUCCEEDED',
        'FETCH_USER_IMAGES_FAILED'
      ],
      method: 'GET'
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

export function currentImagesCalled(id) {
  return {
    type: 'CURRENT_IMAGES_CALLED',
    payload: id
  };
}
