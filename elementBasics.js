


describe('Protractor Element Demo', function(){

    var obje = require("./jsObjectDemo.js");
    var dp = require("./jasmineDataProvider");
    var using = require('jasmine-data-provider');
    

    beforeEach(function(){
        obje.getURL();
        console.log("landing URL");
    });

        using(dp.Datadriven, function(data, description){
            browser.waitForAngularEnabled(false);
            it("Locators" + description, function(){
  
              
                obje.firstinput.sendKeys(data.firstinput);
                obje.secondinput.sendKeys(data.secondinput);
            
                obje.gobutton.click();
                browser.sleep (2000);
            
                expect(obje.result.getText()).toBe(data.result);
                obje.result.getText().then(function(text){
            
                    console.log(text);
                });
            });
    });

    //browser.waitForAngularEnabled(false);
   


afterEach(function(){
    console.log("Test is completed");


});


    

});