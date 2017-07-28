var BasePage = require('./basePage');
var consts = require('../../support/const');

function LoginPage() {

    this.url = '/login';

    this.userName = element(by.css("input[name='userName']"));
    this.password = element(by.css("input[name='password']"));
    this.loginButton = element(by.css('.wk-button-primary'));

    this.submitForm = function () {
        var self = this;
        return self.userName.sendKeys(consts.username)
            .then(function () {
                return self.password.sendKeys(consts.password);
            })
            .then(function () {
                return self.loginButton.click();
            })
            .then(function () {
                return require('../page/homePage');
            })
    }

    this.loginPageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.userName.isDisplayed()
    };
}

LoginPage.prototype = BasePage;
module.exports = new LoginPage();
