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

export function deleteImage(id) {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: `/image/${id}`,
      authenticated: true,
      types: [
        'DELETE_IMAGE',
        'DELETE_IMAGE_SUCCEEDED',
        'DELETE_IMAGE_FAILED'
      ],
      method: 'DELETE'
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

export function getUserImages(name) {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: `/images/user/${name}`,
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

export function getUserDate(day, month, year) {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: `/images/date/${day}/${month}/${year}`,
      authenticated: true,
      types: [
        'FETCH_DATE_IMAGES',
        'FETCH_DATE_IMAGES_SUCCEEDED',
        'FETCH_DATE_IMAGES_FAILED'
      ],
      method: 'GET'
    }
  };
}

export function getPlatformImages(platform) {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: `/images/platform/${platform}`,
      authenticated: true,
      types: [
        'FETCH_PLATFORM_IMAGES',
        'FETCH_PLATFORM_IMAGES_SUCCEEDED',
        'FETCH_PLATFORM_IMAGES_FAILED'
      ],
      method: 'GET'
    }
  };
}

export function getTitleImages(startAlphabet) {
  return {
    type: 'CALL_API',
    payload: {
      endpoint: `/images/alphabet/${startAlphabet}`,
      authenticated: true,
      types: [
        'FETCH_TITLE_IMAGES',
        'FETCH_TITLE_IMAGES_SUCCEEDED',
        'FETCH_TITLE_IMAGES_FAILED'
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

export function imageFilterChanged(filter) {
  return {
    type: 'IMAGE_FILTER_CHANGED',
    payload: filter
  };
}

export function imageFilterCalled(filterBy) {
  return {
    type: 'IMAGE_FILTER_CALLED',
    payload: filterBy
  };
}
