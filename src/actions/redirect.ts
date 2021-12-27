import { Dispatch } from 'redux';
// import { CLEAR_REDIRECT, NEED_REDIRECT } from './action-types';

export interface IRedirect {
  type: 'NEED_REDIRECT';
}

export interface IClearRedirect {
  type: 'CLEAR_REDIRECT';
}

export type ActionRedirect = IRedirect | IClearRedirect;

export const createActionRedirect = (): IRedirect => {
  return { type: 'NEED_REDIRECT' };
};

export const createActionClearRedirect = (): IClearRedirect => {
  return { type: 'CLEAR_REDIRECT' };
};

export function clearRedirect() {
  return function (dispatch: Dispatch): void {
    dispatch(createActionClearRedirect());
  };
}

export function redirect() {
  return function (dispatch: Dispatch): void {
    dispatch(createActionRedirect());
  };
}
