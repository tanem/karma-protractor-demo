var env = require('habitat').load('./.env');
var user = env.get('browserstackUser');
var key = env.get('browserstackKey');

exports.config = {

  // The host the site is available at.
  baseUrl: 'http://tanem.github.io',

  // The address of a running selenium server.
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

  params: {
    isBrowserstack: true
  }

};
