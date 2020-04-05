module.exports = `
import { combineReducers } from 'redux';
import { applicationReducer as application } from './application/reducer';

const rootReducer = combineReducers({
  application
});

export default rootReducer;
`