import { login } from './types';
import { setToken } from '../utils/token';
require('dotenv').config()


export const submitForm = form => (dispatch) => {
  const post = {
    email: form.email,
    password: form.password
  };
  fetch(process.env.REACT_APP_API_URL + '/createToken', {
    method: 'post',
    header: {
      'constent-type': 'application/json'
    },
    body: JSON.stringify(post)
  }).then(res => res.json())
    .then((data) => {
      if (data.statusCode === 400) {
        dispatch({
          type: login,
          result: undefined
        });
      } else {
        setToken(data.token);
        dispatch({
          type: login,
          result: data
        });
      }
    });
};
