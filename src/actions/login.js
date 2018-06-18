import { login } from './types';

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
        dispatch({
          type: login,
          result: data.results
        });
      }
    });
};
