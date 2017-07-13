var BasePage = require('./basePage');

function ResultsPage() {

    this.results = element.all(by.css(".title a"));
   
    this.checkResults = function () {
        var self = this;
        return self.results.count()
    };
}

ResultsPage.prototype = BasePage;
module.exports = new ResultsPage();





