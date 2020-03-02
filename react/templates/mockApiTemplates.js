const index = require("./mock-api/index");
const mockController = require("./mock-api/mockController");

module.exports = [
  { path: "mock-api/index.js", file: index },
  { path: "mock-api/mockController.js", file: mockController }
];
