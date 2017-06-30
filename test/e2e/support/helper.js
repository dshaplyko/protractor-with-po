var HelperSteps = function () {

    this.setValueInDropdown = function (text) {
        return element(by.cssContainingText('.option label', text)).click();
    }
};

module.exports = new HelperSteps();