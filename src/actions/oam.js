import { fetchAuthor } from './types';

export const fetchNow = () => (dispatch) => {
  fetch(process.env.REACT_APP_API_URL + '/')
    .then(res => res.json())
    .then(data => dispatch({
      type: fetchAuthor,
      result: data.meta.provided_by
    }));
};
