import { Given, When, Then } from 'cucumber';
import { HomePagePO } from '../PageObjects/HomePagePO';
import { browser } from 'protractor';
import chai from 'chai';

let hpObj = new HomePagePO
var expect = chai.expect;


Given('I will navigate to the AngularJS Home Page', async () => {
    // Write code here that turns the phrase above into concrete actions
    await browser.get("https://rahulshettyacademy.com/angularpractice/");
});


When('I will enter the user details and submit', async () => {
    // Write code here that turns the phrase above into concrete actions
    await hpObj.name.sendKeys("Anu");
    await hpObj.email.sendKeys("test@test.com");
    await hpObj.password.sendKeys("password");
    await hpObj.iceCreamCheckbox.click();
    await hpObj.gender.click();
    await hpObj.employmentStatus.first().click();

});

When('I will enter the {string} in username field', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await hpObj.name.sendKeys(string);
});


When('I will enter the {string} in email field', async (string) => {
    // Write code here that turns the phrase above into concrete actions
    await hpObj.email.sendKeys(string);
});



Then('I will validate the {string} message', async (message) => {
    // Write code here that turns the phrase above into concrete actions
    await hpObj.submit.click();
    await hpObj.successMessage.getText().then(async (text: string) => {
        browser.sleep(3000);
        console.log(text);
        expect(text).to.contain(message);
    });
});