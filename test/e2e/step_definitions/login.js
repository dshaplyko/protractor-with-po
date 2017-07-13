var chai = require('chai');
var expect = chai.expect;
var loginPage = require('../po/page/loginPage');

var LoginSteps = function () {

    this.When(/^I enter credentials/, function () {
        return loginPage.submitForm();
    });

    this.Then(/^Login dialog should be displayed/, function () {
        return loginPage.loginPageShouldBeFullyDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true
        });
    });
};

module.exports = LoginSteps;

