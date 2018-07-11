import { setToken } from '../utils/token';

const tokenMiddleware = store => next => (action) => {
  if (action.type === 'LOGIN_SUCCEEDED') {
    setToken(action.payload.json.token);
  }
  return next(action);
};

export default tokenMiddleware;
