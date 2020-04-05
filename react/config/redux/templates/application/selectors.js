module.exports = `
import { IStoreState } from '../state';
import { createSelector } from 'reselect';
import { IApplicationState } from './reducer';

export const applicationSelector = (state: IStoreState): IApplicationState =>
  state.application;

export const currentPageSelector = createSelector(applicationSelector, (application: IApplicationState) => {
  return application.currentPage;
});
`;
