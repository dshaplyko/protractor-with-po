var Header = require('../common/header.js');
var Footer = require('../common/footer.js');
var SearchBox = require('../common/searchBox.js');

var BasePage = function () {

    this.searchBox = SearchBox;
    this.header = Header;
    this.footer = Footer;


    this.visit = function () {
        return browser.get(this.url);
    };

    this.checkPageTitle = function (pageTitle) {
        return browser.getTitle().then(function (title) {
            return title === pageTitle;
        });
    };

    this.hitEnter = function () {
        return browser.actions().sendKeys(protractor.Key.ENTER).perform();
    };


};

module.exports = new BasePage();