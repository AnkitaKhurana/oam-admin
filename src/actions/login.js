import { login } from './types';
import { setToken } from '../utils/token';

export const submitForm = (form) => (dispatch) => {
  const post = {
    name: form.name,
    password: form.password
  };
  fetch('http://localhost:4000/admin', {
    method: 'post',
    header: {
      'constent-type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
    .then((data) => {
      if (data.results === 'Not Valid Admin Credentials') {
        dispatch({
          type: login,
          result: undefined
        });
      } else {
        setToken(data.results.token);
        dispatch({
          type: login,
          result: data.results
        });
      }
    });
};
