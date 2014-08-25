var env = require('habitat').load('./.env');

exports.config = {

	username: env.get('browserstackUsername'),
	key: env.get('browserstackKey'),

	// The address of a running selenium server.
	seleniumAddress: 'http://hub.browserstack.com/wd/hub',

	// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [
		{
			browserName: 'chrome',
			'browserstack.debug': true,
			'browserstack.user': process.env.BROWSERSTACK_USER,
			'browserstack.key': process.env.BROWSERSTACK_KEY
		},
		{
			browserName: 'firefox',
			'browserstack.debug': true,
			'browserstack.user': process.env.BROWSERSTACK_USER,
			'browserstack.key': process.env.BROWSERSTACK_KEY
		},
		{
			browserName: 'internet explorer',
			'browserstack.debug': true,
			'browserstack.user': process.env.BROWSERSTACK_USER,
			'browserstack.key': process.env.BROWSERSTACK_KEY
		},
		{
			browserName: 'safari',
			'browserstack.debug': true,
			'browserstack.user': process.env.BROWSERSTACK_USER,
			'browserstack.key': process.env.BROWSERSTACK_KEY
		},
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
			'browserstack.user': process.env.BROWSERSTACK_USER,
			'browserstack.key': process.env.BROWSERSTACK_KEY
		},
		{
			browserName: 'android',
			device: 'Google Nexus 7',
			'browserstack.debug': true,
			'browserstack.user': process.env.BROWSERSTACK_USER,
			'browserstack.key': process.env.BROWSERSTACK_KEY
		}
	],

	// Options to be passed to Jasmine-node.
	jasmineNodeOpts: {
		isVerbose: true,
		showColors: true,
		defaultTimeoutInterval: 30000
	},

	specs: [
		'test/integration/*.spec.js'
	]

};
