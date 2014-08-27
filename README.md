# karma-protractor-demo

A little demo which shows how one might wire up [Karma](https://github.com/karma-runner/karma) and [Protractor](https://github.com/angular/protractor) for unit and end-to-end (e2e) testing.

## Install

Clone the repo, then `npm install` to install the dependencies.

You'll also need to create a `.env` file in the root of the directory which sets your [BrowserStack](http://www.browserstack.com/) username and access key. This info will be used to run the e2e tests against BrowserStack. For example:

```sh
export BROWSERSTACK_USER=[username]
export BROWSERSTACK_KEY=[key]
```

Finally, ensure Protractor is [set up](https://github.com/angular/protractor/blob/master/docs/tutorial.md#setup).

## Unit tests

### Single run

Karma will start and capture all configured browsers, run tests and then exit with an exit code of 0 or 1 depending on whether all tests passed or any tests failed. Useful when a CI server like [Jenkins](http://jenkins-ci.org/) needs to run the tests:

```sh
$ npm run karma
```

### Continuous integration

Karma will watch the required files and re-run the unit test suite automatically when they change. Useful if you'd like to see test output while you develop:

```sh
$ npm run karma-watch
```

### jUnit reporting

jUnitXML will be output to `_results/unit-results`. A CI tool can use this information to display test results.

### Code coverage reporting

A Cobertura coverage report will be output to `_results/unit-coverage-cobertura`. A CI tool can use this information to display code coverage results.

An HTML coverage report will also be output to `_results/unit-coverage-html`. Open the relevant `index.html` file in a browser to view the results.

### Debugging

Run Karma in continuous integration mode, then run in debug mode from the running browser.

## e2e tests

### Local

First, start the HTTP server:

```sh
$ npm start
```

Then, start the Selenium Server:

```sh
$ webdriver-manager start
```

Finally, run the test suite:

```sh
$ npm run protractor
```

#### jUnit reporting

jUnitXML will be output to `_results/integration-results`.

### BrowserStack

Protractor can be pointed at BrowserStack's running Selenium server, and we can also specify BrowserStack browsers to run our tests against.

The default implementation uses a GitHub pages URL to serve up the content. Check out the `baseUrl` property in `protractor-bs.conf.js`. Update this according to where your site is available. You will probably also need to wrangle the entry point URL in `greeter.spec.js`.

To run:

```sh
$ npm run protractor-bs
```

#### jUnit reporting

jUnitXML will be output to `_results/integration-bs-results`.

### Debugging

See [debugging Protractor tests](https://github.com/angular/protractor/blob/master/docs/debugging.md#debugging-protractor-tests).