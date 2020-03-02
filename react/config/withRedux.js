const reduxTemplates = require("../templates/reduxTemplates");

module.exports = {
  name: "withRedux",
  question: "Do you want your app to include Redux and Redux Saga?",
  dependencies: ["redux", "react-redux", "redux-saga"],
  devDependencies: ["@types/react-redux", "redux-devtools-extension"],
  packageEntries: [],
  templates: reduxTemplates
};
