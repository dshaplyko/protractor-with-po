'use strict';

// Page Factory implementation + Module
var DocumentPage = require('../po/page/documentPage'),
    HomePage = require('../po/page/homePage'),
    LoginPage = require('../po/page/loginPage'),
    ResultsPage = require('../po/page/resultsPage');
    
var PageFactory = (function () {

  var pageConstructors = {
     'document': DocumentPage,
     'home': HomePage,
     'login': LoginPage,
     'results': ResultsPage
  }
  return function (page) {
    if(!pageConstructors[page]) {
        throw new Error('Wrong page name: ' + pageConstructors[page]);
    }
    return new pageConstructors[page];
  }
  
})();

module.exports = PageFactory;