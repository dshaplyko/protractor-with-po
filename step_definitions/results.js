var resultsPage = require('../po/page/resultsPage');
var provider = require('../po/page/pageObjectProvider');

var ResultsSteps = function () {

    this.Then(/^I should see a collection of results/, function () {
        return resultsPage.checkResults();
    });

    // this.When(/^I open Signature gallery tab/, function () {
    //     return resultsPage.openGalleryTabByName();
    // });

    // this.Then(/^I should see a collection of images/, function () {
    //     return resultsPage.checkImagesResults();
    // });

};

module.exports = ResultsSteps;

