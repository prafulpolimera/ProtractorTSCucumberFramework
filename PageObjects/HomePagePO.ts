import {element, ElementFinder, ElementArrayFinder, by} from 'protractor';

export class HomePagePO{

   
        name:ElementFinder;
        email:ElementFinder;
        password:ElementFinder;
        iceCreamCheckbox:ElementFinder;
        gender:ElementFinder;
        employmentStatus:ElementArrayFinder;
        submit:ElementFinder;
        successMessage:ElementFinder;
        
        constructor(){
            this.name = element(by.name("name"));
            this.email = element(by.css("input[name='email']"));
            this.password = element(by.id("exampleInputPassword1"));
            this.iceCreamCheckbox = element(by.id("exampleCheck1"));
            this.gender = element(by.cssContainingText("[id='exampleFormControlSelect1'] option","Female"));
            this.employmentStatus = element.all(by.name("inlineRadioOptions"));
            this.submit = element(by.buttonText("Submit"));
            this.successMessage = element(by.css("div[class*='alert-success']"));
        }
 

}