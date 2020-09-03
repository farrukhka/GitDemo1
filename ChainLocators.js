describe('Chain Locators Demo', function(){
    browser.waitForAngularEnabled(false);
it("Open Angular js website", function(){
  
    browser.get("https://juliemr.github.io/protractor-demo/");
    element(by.model("first")).sendKeys("4");
    element(by.model("second")).sendKeys("5").then(function(){

    element(by.css("[id='gobutton']")).click();
    browser.sleep (2000);

    element(by.repeater("result in memory")).element(by.css("td:nth-child(2)")).getText().then(function(text)
    {

    console.log(text);
   
    });
});

});

});

