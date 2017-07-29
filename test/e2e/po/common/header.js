var EC = protractor.ExpectedConditions;
var consts = require('../../support/const')

var Header = function () {

    //Header elements and methods
    this.header = element(by.css('.wk-header'));
    this.loginButton = element(by.css(".login-button"));
    this.profile = element(by.css('.profile'));
    this.myLibrary = element(by.css('.user-books'));
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
        return browser.wait(EC.visibilityOf(self.profile), consts.ECTimeout)
            .then(function () {
                return self.profile.isDisplayed()
            });
    };

    this.loginButtonShouldBeDisplayed = function () {
        var self = this;
        return self.loginButton.isDisplayed();
    };

    this.performLogout = function () {
        var self = this;
        return self.profile.click()
            .then(function () {
                return self.logoutButton.click()
            })
    };

    this.openMyLibrary = function () {
        var self = this;
        return self.myLibrary.click()
        .then(function () {
                return require('../page/resultsPage');
            })
    }

};

module.exports = new Header();