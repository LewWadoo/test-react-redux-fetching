import { Dispatch } from 'redux';
// import { CLEAR_LOADING, SET_LOADING } from './action-types';

export interface ISetLoading {
  type: 'SET_LOADING';
}

export interface IClearLoading {
  type: 'CLEAR_LOADING';
}

export type ActionLoading = ISetLoading | IClearLoading;

export const createActionSetLoading = (): ISetLoading => {
  return { type: 'SET_LOADING' };
};

export const createActionClearLoading = (): IClearLoading => {
  return { type: 'CLEAR_LOADING' };
};

export function clearLoading() {
  return function (dispatch: Dispatch): void {
    dispatch(createActionClearLoading());
  };
}

export function setLoading() {
  return function (dispatch: Dispatch): void {
    dispatch(createActionSetLoading());
  };
}
