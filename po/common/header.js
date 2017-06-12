var Header = function () {

    //Header elements and methods
    this.header = element(by.id('site-header'));
    this.joinLink = element(by.css(".account[data-nav='nav=nav_Join']"));

    this.clickJoin = function () {
        var self = this;
        return self.joinLink.click()
            .then(function () {
                return require('../page/joinPage');
            })
    }

};

module.exports = new Header();