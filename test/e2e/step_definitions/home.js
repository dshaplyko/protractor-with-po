var chai = require('chai');
var expect = chai.expect;
var homePage = require('../po/page/homePage');

var HomeSteps = function () {


    this.Then(/^Home page should be displayed/, function () {
        return homePage.homePageShouldBeFullyDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;
        });
    });

    this.Then(/^I am using step only for home page/, function () {
        return homePage.methodOnlyForHomePage();
    });

    this.When(/^I open a book/, function () {
        return homePage.clickOnBook();
    });

};

module.exports = HomeSteps;
