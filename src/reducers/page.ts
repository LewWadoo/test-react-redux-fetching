import { ActionPage } from '../actions/page';

type StatePage = number;
const initialState: StatePage = 1;

function page(state = initialState, action: ActionPage): StatePage {
  switch (action.type) {
    case 'INCREMENT_PAGE':
      return state + 1;

    default:
      return state;
  }
}

export default page;
