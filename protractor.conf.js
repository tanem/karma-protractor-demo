exports.config = {

  // The host the site is available at.
  baseUrl: 'http://127.0.0.1:8000/',

  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [
    { 'browserName': 'chrome' }
  ],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 30000
  },

  specs: [
    'test/integration/*.spec.js'
  ],

  params: {
    isBrowserstack: false
  },

  onPrepare: function() {

    // Ensure the correct report dirs are created.
    require('mkdirp').sync('_reports/integration-results');

    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    require('jasmine-reporters');

    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('_reports/integration-results', true, true)
    );

    // Don't wait for Angular, this means we can use the same DSL as if
    // it *was* an Angular site.
    browser.ignoreSynchronization = true;

    // The amount of time the driver should wait when searching for an
    // element if it is not immediately present.
    browser.manage().timeouts().implicitlyWait(10000);

  }

};
