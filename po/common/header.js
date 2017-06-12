var Header = function () {

    //Header elements and methods
    this.header = element(by.css('.wk-header'));
    this.loginButton = element(by.css(".login-button"));

    this.clickLogin = function () {
        var self = this;
        return self.loginButton.click()
            .then(function () {
                return require('../page/loginPage');
            })
    }

};

module.exports = new Header();