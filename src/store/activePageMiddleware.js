import { getUsers } from '../actions/actions';

const activePageMiddleware = store => next => (action) => {
  if (action.type === 'ACTIVE_PAGE_CHANGED') {
    if (action.payload === 'Users') {
      store.dispatch(getUsers());
    }
  }
  return next(action);
};

export default activePageMiddleware;
