var joinPage = require('../po/page/joinPage');


var JoinSteps = function () {

    this.When(/^I submit join form/, function () {
        return joinPage.submitJoinForm();
    });

};

module.exports = JoinSteps;

