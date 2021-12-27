import { ActionError } from '../actions/error';

type StateError = string;

const initialState: StateError = '';

function error(state = initialState, action: ActionError): StateError {
  switch (action.type) {
    case 'SET_ERROR': {
      return action.error;
    }
    case 'CLEAR_ERROR':
      return initialState;

    default:
      return state;
  }
}

export default error;
