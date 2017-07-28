var helper = require('../../support/helper');
var consts = require('../../const/const')

var EC = protractor.ExpectedConditions;

var SearchBox = function () {
    this.searchBar = element(by.css(".lmb-search-bar"));
    this.searchInput = element(by.css(".wk-search-box input[type='search']"));
    this.searchButton = element(by.css('.wk-search-bar .wk-search-submit'));
    this.searchFilterDropdown = element(by.css('.wk-select-field'));
    this.searchFilterDropdownOverlay = element(by.css('.wk-select-field select'));
    // this.searchByImage = element.all(by.css('.search-camera-icon'));

    this.performSearch = function (searchTerm) {
        var self = this;
        return self.searchInput.sendKeys(searchTerm)
            .then(function () {
                return self.searchButton.click();
            }).then(function () {
                return require('../page/resultsPage');
            });
    };

    this.setFilterFromDropdown = function (value) {
        var self = this;
        return self.searchFilterDropdown.click()
            .then(function () {
                return browser.wait(EC.visibilityOf(self.searchFilterDropdownOverlay), consts.ECTimeout);
            })
            .then(function () {
                return helper.setValueInDropdown(value);
            });
    };

    this.performSearchWithFilter = function (searchTerm, filterName) {
        var self = this;
        return self.setFilterFromDropdown(filterName)
            .then(function () {
                return self.searchInput.sendKeys(searchTerm)
            })
            .then(function () {
                return self.searchButton.click();
            }).then(function () {
                return require('../page/resultsPage');
            });
    };
};

module.exports = new SearchBox();
