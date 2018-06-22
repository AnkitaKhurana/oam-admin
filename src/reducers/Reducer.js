import jwt from 'jsonwebtoken';
import { fetchAuthor, login, checkToken, logout } from '../actions/types';

const initialState = {
  items: '',
  formName: '',
  formPass: '',
  isAuthentic: false
};
const tokenIsVaild = (token, currentTime) => {
  if (token) {
    const decoded = jwt.decode(token);
    const isValid = decoded.exp > currentTime;
    return isValid;
  }
  return false;
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

      return {
        ...state,
        isAuthentic: false
      };

    case checkToken:
    {
      const { token, currentTime } = action.result;
      const validToken = tokenIsVaild(token, currentTime);
      return {
        ...state,
        isAuthentic: validToken
      };
    }

    case logout:
    {
      return {
        ...state,
        isAuthentic: false
      };
    }

    default: return state;
  }
}
