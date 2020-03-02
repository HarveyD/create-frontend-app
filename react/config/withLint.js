module.exports  = {
  name: "withLint",
  question: "Do you want to include static code analysis (TSLint, Prettier and StyleLint)?",
  dependencies: [],
  devDependencies: [
    "tslint",
    "pre-commit",
    "stylelint",
    "stylelint-config-recommended-scss",
    "prettier"
  ],
  packageEntries: [
    {
      key: "pre-commit",
      value: ["prettier:check"]
    },
    {
      key: "scripts.lint",
      value:
        "npm run prettier:check && npm run tslint:check && npm run stylelint:check"
    },
    {
      key: "scripts.prettier",
      value: "prettier --write src/**/*.{js,ts,tsx,scss}"
    },
    {
      key: "scripts.prettier:check",
      value: "prettier --list-different src/**/*.{js,ts,tsx,scss}"
    },
    {
      key: "scripts.tslint:check",
      value: `tslint -c tslint.json 'src/**/*.{ts,tsx}'`
    },
    { key: "scripts.stylelint:check", value: 'stylelint "src/**/*.scss"' }
  ],
  templates: []
};
