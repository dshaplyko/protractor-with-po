var helper = require('../../support/helper');

var EC = protractor.ExpectedConditions;

var SearchBox = function () {
    this.searchBar = element(by.css('.search-bar'));
    this.searchInput = element(by.css('.search-bar__input input'));
    this.searchButton = element(by.css('.search-bar__submit'));
    this.searchByImage = element.all(by.css('.search-camera-icon'));
    this.searchFilterDropdown = element(by.css('.media-filter-label'));
    this.searchFilterDropdownOverlay = element(by.css('.media-types'));

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
                return browser.wait(EC.visibilityOf(self.searchFilterDropdownOverlay), 5000);
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