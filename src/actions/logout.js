import { logout } from './types';
import { clearToken } from '../utils/token';

export const logoutAdmin = () => (dispatch) => {
  clearToken();
  return({
    type: logout,
    result: false
  });
};
