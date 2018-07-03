import { fetchAuthor } from './types';

export function fetchNow() {
  return {
    type: fetchAuthor,
    endpoint: '/',
    method: 'get',
  };
}
