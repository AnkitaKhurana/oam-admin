const initialState = {
  author: null,
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

    case 'FETCH_AUTHOR_SUCCEEDED': {
      const author = action.payload.json.data.meta.provided_by;
      return {
        ...state,
        author
      };
    }

    default: return state;
  }
}
