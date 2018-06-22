import { logout } from './types';
import { clearToken } from '../utils/token';

export const logoutAdmin = () => (dispatch) => {
  clearToken();
  dispatch({
    type: logout,
    result: false
  });
};
