var loginPage = require('../po/page/loginPage');
var header = require('../po/common/header');
var provider = require('../po/page/pageObjectProvider');
var consts = require('../support/const')
var EC = protractor.ExpectedConditions;

module.exports = function () {

    this.Before({tags: ['@role(logged)']}, function() {
        var self = this;
        return provider.getPageObjects('login').visit()
            .then(function () {
                return loginPage.submitForm()
                    .then(function (){
                        return browser.wait(EC.visibilityOf(header.profile), consts.ECTimeout)
                })  
            })
    });

    this.After(function () {
        return browser.executeScript('window.localStorage.clear();')
            .then(function () {
                browser.manage().deleteAllCookies();
            });
    });
};