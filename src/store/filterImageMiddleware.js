import { getUserImages, getPlatformImages, getTitleImages, getUserDate } from '../actions/actions';

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
    if (filter === 'date') {
      const date = parameter.split('-');
      const day = date[2];
      const month = date[1];
      const year = date[0];
      store.dispatch(getUserDate(day, month, year));
    }
  }
  return next(action);
};

export default filterImageMiddleware;
