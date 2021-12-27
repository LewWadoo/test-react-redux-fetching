import { Dispatch } from 'redux';

export interface IIncrementPage {
  type: 'INCREMENT_PAGE';
}

export type ActionPage = IIncrementPage;

const createActionIncrementPage = (): IIncrementPage => {
  return { type: 'INCREMENT_PAGE' };
};

export function incrementPage() {
  return function (dispatch: Dispatch): void {
    dispatch(createActionIncrementPage());
  };
}
