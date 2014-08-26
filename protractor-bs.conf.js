var env = require('habitat').load('./.env');
var user = env.get('browserstackUser');
var key = env.get('browserstackKey');

exports.config = {

  // The host the site is available at.
  baseUrl: 'http://tanem.github.io',

  // Browserstack's running selenium server.
  seleniumAddress: 'http://hub.browserstack.com/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  multiCapabilities: [
    /*
    {
      browserName: 'chrome',
      'browserstack.debug': true,
      'browserstack.user': user,
      'browserstack.key': key
    },
    {
      browserName: 'firefox',
      'browserstack.debug': true,
      'browserstack.user': user,
      'browserstack.key': key
    },
    {
      browserName: 'internet explorer',
      'browserstack.debug': true,
      'browserstack.user': user,
      'browserstack.key': key
    },
    {
      browserName: 'safari',
      'browserstack.debug': true,
      'browserstack.user': user,
      'browserstack.key': key
    },
    */
    {
      browserName: 'iPad',
      device: 'iPad Air',
      'browserstack.debug': true,
      'browserstack.user': process.env.BROWSERSTACK_USER,
      'browserstack.key': process.env.BROWSERSTACK_KEY
    },
    {
      browserName: 'iPhone',
      device: 'iPhone 5S',
      'browserstack.debug': true,
      'browserstack.user': user,
      'browserstack.key': key
    },
    {
      browserName: 'android',
      device: 'Google Nexus 7',
      'browserstack.debug': true,
      'browserstack.user': user,
      'browserstack.key': key
    }
  ],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    defaultTimeoutInterval: 300000
  },

  specs: [
    'test/integration/*.spec.js'
  ],

  // Used in the specs to determine which URL to load.
  params: {
    isBrowserstack: true
  },

  onPrepare: function() {

    // Ensure the correct report dirs are created.
    require('mkdirp').sync('_reports/integration-bs-results');

    // The require statement must be down here, since jasmine-reporters
    // needs jasmine to be in the global and protractor does not guarantee
    // this until inside the onPrepare function.
    require('jasmine-reporters');

    jasmine.getEnv().addReporter(
      new jasmine.JUnitXmlReporter('_reports/integration-bs-results', true, true)
    );

    // Don't wait for Angular, this means we can use the same DSL as if
    // it *was* an Angular site.
    browser.ignoreSynchronization = true;

    // The amount of time the driver should wait when searching for an
    // element if it is not immediately present.
    browser.manage().timeouts().implicitlyWait(10000);

  }

};
