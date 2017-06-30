var BasePage = require('./basePage');
var chai = require('chai');
var expect = chai.expect;

function LoginPage() {

    this.url = 'https://new.lamiabiblioteca.com/login';

    this.userName = element(by.css("input[name='userName']"));
    this.password = element(by.css("input[name='password']"));
    this.loginButton = element(by.css('.wk-button-primary'));

    this.submitForm = function () {
        var self = this;
        return self.userName.sendKeys("testbiblio")
            .then(function () {
                return self.password.sendKeys("testbiblio")
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
        return self.userName.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        })
    };

}

LoginPage.prototype = BasePage;
module.exports = new LoginPage();