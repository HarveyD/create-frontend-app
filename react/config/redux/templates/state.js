
module.exports = `
import { IApplicationState } from './application/reducer';

export interface IStoreState {
  application: IApplicationState;
}

export const initialState: IStoreState = {
  application: {
    currentPage: 1
  }
};
`
