
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['elementBasics.js'],

    onPrepare: function(){
       // browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target/screenshots'
            })
        );
    },
  
    capabilities: {

       browserName: 'chrome',
       
       'goog:chromeOptions': {
           w3c: false
       },
       marionette : true,
       acceptInsecureCerts: true
    },
       suites: {
Smoke : ['ChainLocators.js', 'Dropdown.js' ],
Regression : 'elementBasics.js'

       },

       jasmineNodeOpts:{
           showColors: true
       },

     
    

};
