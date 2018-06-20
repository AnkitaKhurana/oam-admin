import { checkToken } from './types';

export function tokenIsValid(token, currentTime) {
  return {
    type: checkToken,
    result: {
      token,
      currentTime
    }
  };
}
