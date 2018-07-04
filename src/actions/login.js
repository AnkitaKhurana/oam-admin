import { callApi } from './types';

export function submitForm(form) {
  const post = {
    email: form.email,
    password: form.password
  };
  return {
    type: callApi,
    endpoint: '/createToken',
    method: 'post',
    json: post
  };
}

