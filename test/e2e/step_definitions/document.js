var documentPage = require('../support/pageFactory')('document');

var DocumentSteps = function () {

    this.Then(/^Document page should be displayed/, function () {
        return documentPage.documentPageShouldBeFullyDisplayed();
    });

    this.When(/^I double click on title/, function () {
        return documentPage.doubleClickOnDocument();
    });

    this.When(/^I highlight title/, function () {
        return documentPage.highlightElement();
    });
};

module.exports = DocumentSteps;