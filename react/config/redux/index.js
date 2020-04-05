const rootStore = require("./templates/store");
const rootSagas = require("./templates/sagas");
const rootReducer = require("./templates/reducer");
const rootState = require("./templates/state");

const actions = require("./templates/application/actions");
const reducer = require("./templates/application/reducer");
const sagas = require("./templates/application/sagas");
const selectors = require("./templates/application/selectors");

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
