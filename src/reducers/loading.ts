import { ActionRedirect } from '../actions/redirect';
import { ActionLoading } from '../actions/loading';
import { ActionNews } from '../actions/news';

type StateLoading = boolean;
type Action = ActionLoading | ActionNews | ActionRedirect;
const initialState: StateLoading = false;

function loading(state = initialState, action: Action): StateLoading {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
    case 'SET_LOADING':
      return true;
    case 'FETCH_NEWS_SUCCESS':
    case 'FETCH_NEWS_FAIL':
    case 'CLEAR_LOADING':
    case 'CLEAR_REDIRECT':
      return false;

    default:
      return state;
  }
}

export default loading;
