const mockApiTemplates = require("../templates/mockApiTemplates");

module.exports  = {
  name: "withMockApi",
  question: "Do you want to include a local mock API using Node and Express?",
  dependencies: [],
  devDependencies: ["express", "body-parser"],
  packageEntries: [
    { key: "proxy", value: "http://localhost:9001" },
    {
      key: "scripts.dev",
      value: "run-p start mock-api"
    }
  ],
  templates: mockApiTemplates
};
