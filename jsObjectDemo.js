

function car(){

this.firstinput=element(by.model("first"));
this.secondinput=element(by.model("second"));
this.gobutton=element(by.css("[id='gobutton']"));
this.result=element(by.css("h2[class='ng-binding']"));


this.color="red";
this.engine="turbo";
this.brand="BMW";
this.search="by.css('input')";

this.getURL=function(){
    browser.get("https://juliemr.github.io/protractor-demo/");

};


}

    module.exports = new car();










