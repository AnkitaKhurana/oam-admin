import { fetchAuthor } from './types';

export const fetchNow = () => (dispatch) => {
  fetch('http://localhost:4000')
    .then(res => res.json())
    .then(data => dispatch({
      type: fetchAuthor,
      result: data.meta.provided_by
    }));
};
