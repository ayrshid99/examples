const { setHeadlessWhen } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './todomvc-tests/**/*_test.js',
  output: './output',
  
   plugins: {
        "allure": {},
 },
  helpers: {
    Playwright: {
      url: 'http://localhost',
      waitForTimeout: 5000,
      show: true,
    },

    REST: {},

    CustomHelper: {
      require: './todomvc-tests/helpers/custom.helper.js'
    }
  },

  gherkin: {
    features: './todomvc-tests/features/*.feature',
    steps: [
      './todomvc-tests/step-definitions/create-todos.steps.js'
    ]
  },

  include: {
    TodosPage: './todomvc-tests/pages/todos.page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}
