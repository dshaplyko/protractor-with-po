var chai = require('chai');
var expect = chai.expect;
var documentPage = require('../po/page/documentPage');

var DocumentSteps = function () {

    this.Then(/^Document page should be displayed/, function () {
        return documentPage.documentPageShouldBeFullyDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        });
    });

    this.When(/^I double click on title/, function () {
        return documentPage.doubleClickOnDocument();
    });

    this.When(/^I highlight title/, function () {
        return documentPage.highlightElement();
    });
};

module.exports = DocumentSteps;