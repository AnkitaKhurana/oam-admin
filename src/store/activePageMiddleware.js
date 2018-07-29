import { getUsers, getImages } from '../actions/actions';

const activePageMiddleware = store => next => (action) => {
  if (action.type === 'ACTIVE_PAGE_CHANGED') {
    if (action.payload === 'Users') {
      store.dispatch(getUsers());
    }
    if (action.payload === 'Images') {
      store.dispatch(getImages());
    }
  }
  return next(action);
};

export default activePageMiddleware;
