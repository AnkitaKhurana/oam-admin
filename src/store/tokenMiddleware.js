import { setToken, clearToken } from '../utils/token';

const tokenMiddleware = store => next => (action) => {
  if (action.type === 'LOGIN_SUCCEEDED') {
    setToken(action.payload.json.token);
  }
  if (action.type === 'LOGOUT') {
    clearToken();
    store.dispatch({ type: 'LOGOUT_SUCCEEDED' });
  }
  return next(action);
};

export default tokenMiddleware;
