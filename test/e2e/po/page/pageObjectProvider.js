var PAGE_OBJECT_MAP = {
    "home": "./homePage",
    "results": "./resultsPage",
    "login": "./loginPage",
    "document": "./documentPage"
};

module.exports.getPageObjects = function (pageName) {
    return require(PAGE_OBJECT_MAP[pageName]);
};