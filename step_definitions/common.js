var page = require('../po/page/basePage');
var provider = require('../po/page/pageObjectProvider');

var CommonSteps = function () {

    this.Given(/^I am on "([^"]*)" page$/, function (pageName) {
        return provider.getPageObjects(pageName).visit();
    });

    this.When(/^I perform a search of "([^"]*)"$/, function (searchTerm) {
        return page.searchBox.performSearch(searchTerm);
    });

    this.When(/^I open login page$/, function () {
        return page.header.clickLogin();
    });

    this.When(/^Profile menu should be displayed$/, function () {
        return page.header.profileMenuShouldBeDisplayed();
    });

    this.When(/^Profile menu should not be displayed$/, function () {
        return page.header.profileMenuShouldNotBeDisplayed();
    });

    this.When(/^I click My Library link$/, function () {
        return page.header.openMyLibrary();
    });

    this.When(/^I am using step for all pages$/, function () {
        return page.methodCommonForAllPages();
    });

    this.When(/^I logout/, function () {
        return page.header.performLogout();
    });

    this.When(/^I scroll to the bottom/, function () {
        return page.scrollToTheBottom();
    });

    this.When(/^I scroll to the top/, function () {
        return page.scrollToTheTop();
    });

    this.When(/^I wait for 5 seconds/, function () {
        return page.wait();
    });


    // this.When(/^I perform a search of "([^"]*)" with "([^"]*)" filter$/, function (searchTerm, filterName) {
    //     return page.searchBox.performSearchWithFilter(searchTerm, filterName);
    // });

};

module.exports = CommonSteps;

