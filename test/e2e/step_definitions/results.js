var chai = require('chai');
var expect = chai.expect;
var resultsPage = require('../po/page/resultsPage');

var ResultsSteps = function () {

    this.Then(/^I should see a collection of results/, function () {
        return resultsPage.checkResults().then(function (number) {
            expect(number).to.be.above(0)
        });
    });
};

module.exports = ResultsSteps;

