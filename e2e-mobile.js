exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    globalTimeout: 300000,
    pageTimeout: 300000,
    baseUrl: 'https://new.lamiabiblioteca.com/',
    allScriptsTimeout: 300000,
    capabilities: {
        'browserName': 'chrome'
    },
    specs: [
        './test/e2e/features/*/*.feature'
    ],
    cucumberOpts: {
        require: [
            './test/e2e/step_definitions/*.js',
            './test/e2e/support/env',
            './test/e2e/support/hooks'
        ],
        format: 'pretty',
        tags: ['@mobile', '~@desktop']
    },

    onPrepare: function () {
        browser.manage().window().setSize(800, 600);
        console.log('e2e started');
    }
};
