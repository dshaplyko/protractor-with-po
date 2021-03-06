var BasePage = require('./basePage');

function DocumentPage() {

    this.url = '/read';
    this.bookHeader = element(by.css('.lmb-book-header'));
    this.title = element(by.css('.part-title .title'));


    this.documentPageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.bookHeader.isDisplayed()
    };

    this.doubleClickOnDocument = function () {
        var self = this;
        return browser.actions().doubleClick(self.title).perform();
    }

    this.highlightElement = function () {
        var self = this;
        return browser.executeScript("arguments[0].style.color = '" + "red" + "'", self.title)
    }
}

DocumentPage.prototype = BasePage;
module.exports = new DocumentPage();
