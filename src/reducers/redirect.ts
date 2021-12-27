import { ActionRedirect } from '../actions/redirect';

type StateRedirect = boolean;
const initialState: StateRedirect = false;

function redirect(state = initialState, action: ActionRedirect): StateRedirect {
  switch (action.type) {
    case 'NEED_REDIRECT':
      return true;
    case 'CLEAR_REDIRECT':
      return false;

    default:
      return state;
  }
}

export default redirect;
