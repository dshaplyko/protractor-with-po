var loginPage = require('../po/page/loginPage');

var LoginSteps = function () {

    this.When(/^I enter credentials/, function () {
        return loginPage.submitForm();
    });

    this.Then(/^Login page should be displayed/, function () {
        return loginPage.loginPageShouldBeFullyDisplayed();
    });

};

module.exports = LoginSteps;

