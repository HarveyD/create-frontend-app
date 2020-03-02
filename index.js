#!/usr/bin/env node
const inquirer = require("inquirer");
const reactApp = require("./react/reactApp");

const askAppQuestions = () => {
  const questions = [
    {
      type: "input",
      name: "appName",
      message:
        "What name do you want to give your app (should be in kebab case format: `your-app-name`)?"
    },
    {
      type: "list",
      name: "appType",
      message: "What framework do you want to use?",
      choices: ["react", "angular", "vue"]
    }
  ];
  return inquirer.prompt(questions);
};

const appDict = {
  react: reactApp
};

const run = async () => {
  const answer = await askAppQuestions();
  const { appName, appType } = answer;

  // Todo: Perform some validation on appName here to make sure it's kebab case
  if (!appName || appName.length <= 0) {
    console.log(`Please enter a valid name for your new app.`.red);
    return process.exit(0);
  }

  const app = appDict[appType];

  if (!app) {
    console.log(
      `App type: ${appType} is not yet supported by this CLI tool.`.red
    );
    return process.exit(0);
  }

  const appDirectory = `${process.cwd()}/${appName}`;

  const res = await app.create(appName, appDirectory);

  if (!res) {
    console.log("There was an error generating your app.".red);
    return process.exit(0);
  }

  return process.exit(0);
};

run();
