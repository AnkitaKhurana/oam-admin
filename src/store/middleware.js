import { callApi, fetchAuthor } from '../actions/types';
import { setToken } from '../utils/token';

require('dotenv').config();

const BASE_URL = process.env.REACT_APP_API_URL;

function Api(endpoint, method_, token, json) {
  const config = {
    method: method_,
    header: {
      'content-type': 'application/json'
    }
  };
  if (token) {
    config.headers = { Authorization: token };
  }
  if (json) {
    config.body = JSON.stringify(json);
  }
  return fetch(BASE_URL + endpoint, config);
}


const apiMiddleware = store => next => (action) => {
  if (action.type === fetchAuthor) {
    const { endpoint, method, json } = action;

    Api(endpoint, method, null, json)
      .then(res => res.json())
      .then(data =>
        next({
          type: fetchAuthor,
          result: data.meta.provided_by,
        }));
  }
  else if (action.type === callApi) {
    const { endpoint, method, json } = action;
    Api(endpoint, method, null, json)
      .then(res => res.json())
      .then((data) => {
        let auth = false;
        let res;
        if (data.token) {
          setToken(data.token);
          auth = true;
          res = data.token;
        }
        else {
          res = undefined;
          auth = false;
        }
        return next({
          type: callApi,
          result: res,
          isAuthentic: auth
        });
      })
      .catch(error => console.log(error));
  }
  else {
    return next(action);
  }
};
export default apiMiddleware;
