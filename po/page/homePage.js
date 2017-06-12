var chai = require('chai');
var expect = chai.expect;

var BasePage = require('./basePage');

function HomePage() {

    this.url = 'https://new.lamiabiblioteca.com/home';
    this.publications = element(by.css('.lmb-new-publications'));
    

    this.homePageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.publications.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

}

HomePage.prototype = BasePage;
module.exports = new HomePage();