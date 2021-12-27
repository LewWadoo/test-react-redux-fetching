import { combineReducers } from 'redux';

import error from './error';
import news from './news';
import loading from './loading';
import redirect from './redirect';
import page from './page';

const reducer = combineReducers({
  news,
  page,
  error,
  loading,
  redirect,
});

export default reducer;
