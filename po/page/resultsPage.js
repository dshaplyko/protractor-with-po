var chai = require('chai');
var expect = chai.expect;

var BasePage = require('./basePage');

function ResultsPage() {

    this.galleryTabs = element(by.css('.utility-belt'));
    this.galleryTabEssentials = element(by.cssContainingText('.search-flow-tabs_single', 'Essentials'));
    this.imageResults = element.all(by.css('.search-result-asset-link'));

    this.openGalleryTabByName = function () {
        var self = this;
        return self.galleryTabEssentials.click();
    };

    this.checkImagesResults = function () {
        var self = this;
        return self.imageResults.count().then(function (number) {
            expect(number).to.be.above(0)
        })
    };

    this.checkImagesVisibility = function () {
        var self = this;
        return self.imageResults.isDisplayed().then(function (isDisplayed) {
            return expect(isDisplayed).to.be.true;

        })
    }

}

ResultsPage.prototype = BasePage;
module.exports = new ResultsPage();





