const rootStore = require("./config/redux/templates/store");
const rootSagas = require("./config/redux/templates/sagas");
const rootReducer = require("./config/redux/templates/reducer");
const rootState = require("./config/redux/templates/state");

const actions = require("./config/redux/templates/application/actions");
const reducer = require("./config/redux/templates/application/reducer");
const sagas = require("./config/redux/templates/application/sagas");
const selectors = require("./config/redux/templates/application/selectors");

module.exports = {
  name: "withRedux",
  question: "Do you want your app to include Redux and Redux Saga?",
  dependencies: ["redux", "react-redux", "redux-saga"],
  devDependencies: ["@types/react-redux", "redux-devtools-extension"],
  packageEntries: [],
  templates: [
    { path: "src/store/store.ts", file: rootStore },
    { path: "src/store/sagas.ts", file: rootSagas },
    { path: "src/store/state.ts", file: rootState },
    { path: "src/store/reducer.ts", file: rootReducer },
    { path: "src/store/application/actions.ts", file: actions },
    { path: "src/store/application/reducer.ts", file: reducer },
    { path: "src/store/application/sagas.ts", file: sagas },
    { path: "src/store/application/selectors.ts", file: selectors }
  ]
};
