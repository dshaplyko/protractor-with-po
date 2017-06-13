var homePage = require('../po/page/homePage');
var documentPage = require('../po/page/documentPage');

var HomeSteps = function () {


    this.Then(/^Home page should be displayed/, function () {
        return homePage.homePageShouldBeFullyDisplayed();
    });

    this.Then(/^Document page should be displayed/, function () {
        return documentPage.documentPageShouldBeFullyDisplayed();
    });

    this.Then(/^I am using step only for home page/, function () {
        return homePage.methodOnlyForHomePage();
    });

    this.When(/^I open a book/, function () {
        return homePage.clickOnBook();
    });

    this.When(/^I logout/, function () {
        return homePage.performLogout();
    });




};

module.exports = HomeSteps;
