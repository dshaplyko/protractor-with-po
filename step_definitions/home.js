var homePage = require('../po/page/homePage');

var HomeSteps = function () {


    this.Then(/^Home page should be displayed/, function () {
        return homePage.homePageShouldBeFullyDisplayed();
    });

    this.Then(/^I am using step only for home page/, function () {
        return homePage.methodOnlyForHomePage();
    });


};

module.exports = HomeSteps;
