import { Dispatch } from 'redux';

export interface ISetError {
  type: 'SET_ERROR';
  error: string;
}

export interface IClearError {
  type: 'CLEAR_ERROR';
}

export type ActionError = ISetError | IClearError;

export const createActionSetError = (error: string): ISetError => {
  return { type: 'SET_ERROR', error };
};

export const createActionClearError = (): IClearError => {
  return { type: 'CLEAR_ERROR' };
};

export function clearError() {
  return function (dispatch: Dispatch): void {
    dispatch(createActionClearError());
  };
}

export function setError(error: string) {
  return function (dispatch: Dispatch): void {
    dispatch(createActionSetError(error));
  };
}
