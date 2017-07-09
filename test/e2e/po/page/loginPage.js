var BasePage = require('./basePage');
var chai = require('chai');
var consts = require('../../const/const');
var expect = chai.expect;

function LoginPage() {

    this.url = '/login';

    this.userName = element(by.css("input[name='userName']"));
    this.password = element(by.css("input[name='password']"));
    this.loginButton = element(by.css('.wk-button-primary'));
    this.loginForm = element(by.css('.wk-login-form-container'));

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
        return self.loginForm.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        })
    };

}

LoginPage.prototype = BasePage;
module.exports = LoginPage;
