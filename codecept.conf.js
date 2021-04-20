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
      url: 'https://todomvc.com/examples/angularjs/#/',
      waitForTimeout: 5000,
      show: false,
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

   "mocha": {
    "reporterOptions": {
        "reportDir": "./output"
    }
  },
  
  include: {
    TodosPage: './todomvc-tests/pages/todos.page.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept demo tests'
}
