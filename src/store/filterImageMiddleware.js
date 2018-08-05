import { getUserImages, getPlatformImages, getTitleImages } from '../actions/actions';

const filterImageMiddleware = store => next => (action) => {
  if (action.type === 'IMAGE_FILTER_CALLED') {
    const filter = (store.getState().admin.imageFilter);
    const parameter = action.payload;

    if (filter === 'title') {
      store.dispatch(getTitleImages(parameter));
    }
    if (filter === 'platform') {
      store.dispatch(getPlatformImages(parameter));
    }
    if (filter === 'user') {
      store.dispatch(getUserImages(parameter));
    }
  }
  return next(action);
};

export default filterImageMiddleware;
