const rootStore = require("./redux/store");
const rootSagas = require("./redux/sagas");
const rootReducer = require("./redux/reducer");
const rootState = require("./redux/state");

const actions = require("./redux/application/actions");
const reducer = require("./redux/application/reducer");
const sagas = require("./redux/application/sagas");
const selectors = require("./redux/application/selectors");

module.exports = [
  { path: "src/store/store.ts", file: rootStore },
  { path: "src/store/sagas.ts", file: rootSagas },
  { path: "src/store/state.ts", file: rootState },
  { path: "src/store/reducer.ts", file: rootReducer },
  { path: "src/store/application/actions.ts", file: actions },
  { path: "src/store/application/reducer.ts", file: reducer },
  { path: "src/store/application/sagas.ts", file: sagas },
  { path: "src/store/application/selectors.ts", file: selectors }
];
