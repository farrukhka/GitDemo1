describe('Dropdown', function(){
    browser.waitForAngularEnabled(false);
 it("Locator", function(){
  
     browser.get("https://juliemr.github.io/protractor-demo/");
     function Calc(a,b,c){
element(by.model("first")).sendKeys(a);
element(by.model("second")).sendKeys(b);
element.all(by.tagName("option")).each(function(item){
            item.getAttribute("value").then(function(values){
                if(values==c){
                    item.click();
                    
                }
            });
        });
              element(by.id("gobutton")).click();
              browser.sleep (2000);
            }
Calc(2,6,"ADDITION");
Calc(8,4,"DIVISION");
Calc(12,5,"MODULO");
Calc(8,2,"MULTIPLICATION");
Calc(6,1,"SUBTRACTION");

element.all(by.tagName("option")).each(function(item){
    item.getAttribute("value").then(function(text){

        console.log(text);





// element.all(by.repeater("result in memory")).each(function(item){

//             item.element(by.css("td:nth-child(3)")).getText().then(function(text){
       
//               console.log(text);

//             });

});

});

});

});
