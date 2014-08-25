exports.config = {

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

  onPrepare: function() {

  	// Bwa ha ha.
  	require('mkdirp').sync('_reports/integration-results');

    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    require('jasmine-reporters');

    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('_reports/integration-results', true, true)
    );
  }

};
