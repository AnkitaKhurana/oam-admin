const initialState = {
  author: '',
  authenticated: false,
  users: [],
  activePage: 'PlaceHolder'
};

function updateUserAfterDelete(state, action) {
  const newArray = state.users.slice();
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

    case 'ACTIVE_PAGE_CHANGED':
      return {
        ...state,
        activePage: action.payload
      };

    default: return state;
  }
}
