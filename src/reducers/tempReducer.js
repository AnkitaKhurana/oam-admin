import { fetchAuthor, login } from '../actions/types';

const initialState = {
  items: '',
  formName: '',
  formPass: '',
  isAuthentic: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchAuthor:
      return {
        ...state,
        items: action.result
      };
    case login:
      if (action.result !== undefined) {
        return {
          ...state,
          formName: action.result.name,
          formPass: action.result.password,
          isAuthentic: true
        };
      }
      else {
        return {
          ...state,
          isAuthentic: false
        };
      }
    default: return state;
  }
}
