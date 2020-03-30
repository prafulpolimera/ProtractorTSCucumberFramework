import { Before, After, Status } from "cucumber";
import { browser } from "protractor";

Before(function () {
    //This hook will be executed before all scenarios
    browser.manage().window().maximize().then(function () {
        console.log('This is run before the Scenario')
    });
});



Before({ tags: '@RegressionTest' }, function () {
    console.log('This runs before any Regression Test')
})


Before({ tags: '@FunctionalTest' }, function () {
    console.log('This runs before any Functional Test')
})


After(async function (scenario) {
    if (scenario.result.status === Status.FAILED) {
        //code to take screenshot
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,'image/png')
    }

})
