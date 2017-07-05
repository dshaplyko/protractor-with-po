exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    globalTimeout: 300000,
    pageTimeout: 300000,
    baseUrl: 'https://new.lamiabiblioteca.com/',
    allScriptsTimeout: 300000,
    multiCapabilities: [{
    // 'browserName': 'firefox'
    // }, {
    'browserName': 'chrome'
    }],
    specs: [
        './test/e2e/features/*/*.feature'
    ],
    cucumberOpts: {
        require: [
            './test/e2e/step_definitions/*.js',
            './env.js',
            './hooks.js'
        ],
        format: 'pretty'
    },

    onPrepare: function () {
        browser.manage().window().setSize(1200, 900);
        console.log('e2e started');
    }

};
