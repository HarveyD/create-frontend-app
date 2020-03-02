module.exports = `
import { takeLatest } from '@redux-saga/core/effects';
import { SELECT_PAGE } from './actions';

export function* handleSelectPage() {
  // Perform some saga side effect here
}

export const sagas = [
  takeLatest(SELECT_PAGE, handleSelectPage)
];
`;
