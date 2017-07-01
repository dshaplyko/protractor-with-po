var HelperSteps = function () {

    this.setValueInDropdown = function (text) {
        return element(by.cssContainingText('.wk-select-field option', text)).click();
    }
};

module.exports = new HelperSteps();
