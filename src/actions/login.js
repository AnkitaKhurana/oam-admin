import { login } from './types';

export const submitForm = (formName, formPassword) => (dispatch) => {
  const post = {
    name: formName.name,
    password: formName.password
  };
  fetch('http://localhost:4000/admin', {
    method: 'post',
    header: {
      'constent-type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
    .then(data =>
      dispatch({
        type: login,
        result: data.results
      }));
};
