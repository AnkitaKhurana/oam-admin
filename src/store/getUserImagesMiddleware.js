import { getUserImages } from '../actions/actions';

const getUserImagesMiddleware = store => next => (action) => {
  if (action.type === 'CURRENT_IMAGES_CALLED') {
    store.dispatch(getUserImages(action.payload));
  }
  return next(action);
};

export default getUserImagesMiddleware;
