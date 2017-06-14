var chai = require('chai');
var expect = chai.expect;

var Header = function () {

    //Header elements and methods
    this.header = element(by.css('.wk-header'));
    this.loginButton = element(by.css(".login-button"));
    this.profile = element(by.css('.profile'));
    this.logoutButton = element(by.css('.logout'));

    this.clickLogin = function () {
        var self = this;
        return self.loginButton.click()
            .then(function () {
                return require('../page/loginPage');
            })
    }

    this.profileMenuShouldBeDisplayed = function () {
        var self = this;
        return self.profile.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

    this.profileMenuShouldNotBeDisplayed = function () {
        var self = this;
        return self.loginButton.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

    this.performLogout = function () {
        var self = this;
        return self.profile.click()
            .then(function () {
                return self.logoutButton.click()
            })
    };

};

module.exports = new Header();