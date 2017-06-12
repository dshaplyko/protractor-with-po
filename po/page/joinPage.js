var BasePage = require('./basePage');

function JoinPage() {

    this.url = 'https://www.istockphoto.com/join';

    this.email = element(by.id('register_email'));
    this.password = element(by.id('register_password'));
    this.confirmPassword = element(by.id('register_password_confirmation'));
    this.countryDropdown = element(by.id('register_country_code'));
    this.joinNow = element(by.id('register-button'));

    this.submitJoinForm = function () {
        var self = this;
        var randomPrefix = Math.floor((Math.random() * 1000) + 1);
        return self.email.sendKeys(randomPrefix + "test11123@test.com")
            .then(function () {
                return self.password.sendKeys("12345677qq")
            })
            .then(function () {
                return self.confirmPassword.sendKeys("12345677qq")
            })
            .then(function () {
                return self.countryDropdown.sendKeys("Spain");
            })
            .then(function () {
                return self.joinNow.click();
            })
            .then(function () {
                return require('../page/homePage');
            })
    }

}

JoinPage.prototype = BasePage;
module.exports = new JoinPage();