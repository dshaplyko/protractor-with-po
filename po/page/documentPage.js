var chai = require('chai');
var expect = chai.expect;

var BasePage = require('./basePage');

function DocumentPage() {

    this.url = 'https://new.lamiabiblioteca.com/read/';
    this.bookHeader = element(by.css('.lmb-book-header'));
    

    this.documentPageShouldBeFullyDisplayed = function () {
        var self = this;
        return self.bookHeader.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    };

}

DocumentPage.prototype = BasePage;
module.exports = new DocumentPage();