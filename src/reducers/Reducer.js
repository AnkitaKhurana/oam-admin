const initialState = {
  author: '',
  authenticated: false,
  users: [],
  activePage: 'Admin',
  images: [],
  imageFilter: '',
};

function updateUserAfterDelete(state, action) {
  const newArray = state.users.slice();
  const index = newArray.findIndex(object => object._id === action.payload.json.results._id);
  if (index !== -1) { newArray.splice(index, 1); }
  return newArray;
}

function updateImageAfterDelete(state, action) {
  const newArray = state.images.slice();
  const index = newArray.findIndex(object => object._id === action.payload.json.results._id);
  if (index !== -1) { newArray.splice(index, 1); }
  return newArray;
}

export default function (state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED':
      return {
        ...state,
        authenticated: true
      };

    case 'LOGIN_FAILED':
      return {
        ...state,
        authenticated: false
      };

    case 'TOKEN_EXPIRED':
      return {
        ...state,
        authenticated: false
      };

    case 'TOKEN_VALIDATED':
      return {
        ...state,
        authenticated: true
      };

    case 'LOGOUT':
      return {
        ...state,
        authenticated: false
      };

    case 'FETCH_USERS_SUCCEEDED':
      return {
        ...state,
        users: action.payload.json.results
      };

    case 'FETCH_USERS_FAILED':
      return {
        ...state,
        users: []
      };

    case 'DELETE_USER_FAILED':
      return {
        ...state,
      };

    case 'DELETE_USER_SUCCEEDED':
      return {
        ...state,
        users: updateUserAfterDelete(state, action)
      };
    case 'DELETE_IMAGE_FAILED':
      return {
        ...state,
      };

    case 'DELETE_IMAGE_SUCCEEDED':
      return {
        ...state,
        images: updateImageAfterDelete(state, action)
      };
    case 'ACTIVE_PAGE_CHANGED':
      return {
        ...state,
        activePage: action.payload
      };
    case 'IMAGE_FILTER_CHANGED':
      return {
        ...state,
        imageFilter: action.payload
      };
    case 'IMAGE_FILTER_CALLED':
      return {
        ...state
      };
    case 'FETCH_IMAGES_SUCCEEDED':
      return {
        ...state,
        images: action.payload.json.results
      };
    case 'FETCH_IMAGES_FAILED':
      return {
        ...state,
        images: []
      };
    case 'FETCH_USER_IMAGES_SUCCEEDED':
      return {
        ...state,
        images: action.payload.json.results
      };
    case 'FETCH_USER_IMAGES_FAILED':
      return {
        ...state,
        images: []
      };
    case 'FETCH_PLATFORM_IMAGES_SUCCEEDED':
      return {
        ...state,
        images: action.payload.json.results
      };
    case 'FETCH_PLATFORM_IMAGES_FAILED':
      return {
        ...state,
        images: []
      };
    case 'FETCH_TITLE_IMAGES_SUCCEEDED':
      return {
        ...state,
        images: action.payload.json.results
      };
    case 'FETCH_TITLE_IMAGES_FAILED':
      return {
        ...state,
        images: []
      };
    default: return state;
  }
}
