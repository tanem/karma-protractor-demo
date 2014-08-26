var env = require('habitat').load('./.env');
var user = env.get('browserstackUser');
var key = env.get('browserstackKey');

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    //basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js',
      'src/logger/index.js',
      'src/greeter/index.js',
      'test/unit/logger.spec.js',
      'test/unit/greeter.spec.js'
    ],


    // list of files to exclude
    //exclude: [
    //],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    //preprocessors: {
     // 'src/**/*.js': 'coverage'
    //},


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['dots'],//progress', 'junit', 'coverage'],

    // junitReporter: {
    //   outputFile: '_reports/unit-results/test-results.xml'
    // },

    // coverageReporter: {
    //    reporters: [
    //     { type: 'html', dir: '_reports/unit-coverage-html' },
    //     { type: 'cobertura', dir: '_reports/unit-coverage-cobertura' }
    //     // This will output the report to the console.
    //     // { type: 'text-summary' }
    //   ]
    // },

    // web server port
    //port: 9876,


    // enable / disable colors in the output (reporters and logs)
    //colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    //browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    //singleRun: true,

    browserStack: {
      username: user,
      accessKey: key
    },

    // define browsers
    customLaunchers: {
      bs_firefox_mac: {
        base: 'BrowserStack',
        browser: 'firefox',
        browser_version: 'latest',
        os: 'OS X',
        os_version: 'Mountain Lion'
      },
      bs_iphone5: {
        base: 'BrowserStack',
        device: 'iPhone 5',
        os: 'ios',
        os_version: '6.0'
      }
    },

    browsers: ['bs_firefox_mac', 'bs_iphone5']

  });
};