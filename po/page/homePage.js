var chai = require('chai');
var expect = chai.expect;

var BasePage = require('./basePage');

function HomePage() {

    this.url = 'https://new.lamiabiblioteca.com/home';
    this.publications = element(by.css('.lmb-search-bar'));
    this.books = element.all(by.css('.lmb-book-info-panel > a'));
    this.profile = element(by.css('.profile'));
    this.logoutButton = element(by.css('.logout'));

    this.homePageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.publications.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

    this.findBook = function () {
        var self = this;
        return self.books.then(function (result) {
            return result[3];
        });
    }

    this.performLogout = function () {
        var self = this;
        return self.profile.click()
            .then(function () {
                return self.logoutButton.click()
            })
    };
    
    this.clickOnBook = function () {
        var self = this;
        return this.books.click();
    }

    this.openBook = function () {
        var self = this;
        return this.findBook().clickOnBook();
    }

}

HomePage.prototype = BasePage;
module.exports = new HomePage();