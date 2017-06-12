var PAGE_OBJECT_MAP = {
    "home": "./homePage",
    "results": "./resultsPage",
    "login": "./loginPage"

};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);

};
