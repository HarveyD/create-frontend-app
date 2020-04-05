module.exports = `
import { initialState } from '../state';
import { Reducer, AnyAction } from 'redux';
import { SELECT_PAGE } from './actions';

export interface IApplicationState {
  currentPage: number;
}

export const applicationReducer: Reducer<IApplicationState, AnyAction> = (
  state = initialState.application,
  action: AnyAction
): IApplicationState => {
  switch (action.type) {
    case SELECT_PAGE:
      return { ...state, currentPage: action.payload };
    default:
      return state;
  }
};
`;
