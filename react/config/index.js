const withLint = require("./staticCodeAnalysis");
const withRedux = require("./redux");
const withMockApi = require("./mockApi");

module.exports = [withLint, withRedux, withMockApi];
