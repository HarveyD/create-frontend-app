module.exports = `
import { all } from '@redux-saga/core/effects';

import { sagas as applicationSagas } from './application/sagas';

export default function* sagas() {
  yield all([
    ...applicationSagas,
  ]);
}
`