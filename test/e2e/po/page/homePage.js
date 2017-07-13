var BasePage = require('./basePage');

function HomePage() {

    this.url = '/home';
    this.publications = element(by.css('.lmb-page-content'));
    this.books = element.all(by.css('.lmb-book-info-panel > a'));

    this.homePageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.publications.isDisplayed()
    };

    this.findBook = function () {
        var self = this;
        return self.books.then(function (result) {
            return result[3];
        });
    }

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
