const initialState = {
  author: '',
  authenticated: false
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

    case 'FETCH_AUTHOR_SUCCEEDED':
      return {
        ...state,
        author: action.payload.json.meta.provided_by
      };

    case 'FETCH_AUTHOR_FAILED':
      return {
        ...state,
        author: ''
      };

    default: return state;
  }
}
