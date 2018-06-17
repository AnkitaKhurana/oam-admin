import { fetchAuthor, login } from '../actions/types';

const initialState = {
  items: [],
  formName: '',
  formPass: ''
};

export default function (state = initialState, action) {
  switch (action.type) {
    case fetchAuthor:
      return {
        ...state,
        items: action.result
      };
    case login:
      return {
        ...state,
        formName: action.result.name,
        formPass: action.result.password
      };
    default: return state;
  }
}
