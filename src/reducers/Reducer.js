const initialState = {
  author: '',
  authenticated: false,
  users: [],
  activePage: 'PlaceHolder'
};

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

    case 'ACTIVE_PAGE_CHANGED':
      return {
        ...state,
        activePage: action.payload
      };

    default: return state;
  }
}
