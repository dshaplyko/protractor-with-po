var chai = require('chai');
var expect = chai.expect;

var BasePage = require('./basePage');

function HomePage() {

    this.url = 'http://www.istockphoto.com/';
    this.backroundImage = element(by.id('hero-feature'));

    this.homePageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.backroundImage.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

    this.methodOnlyForHomePage = function () {
        return "method for home page"
    };

}

HomePage.prototype = BasePage;
module.exports = new HomePage();