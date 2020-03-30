"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const HomePagePO_1 = require("../PageObjects/HomePagePO");
const protractor_1 = require("protractor");
const chai_1 = __importDefault(require("chai"));
let hpObj = new HomePagePO_1.HomePagePO;
var expect = chai_1.default.expect;
cucumber_1.Given('I will navigate to the AngularJS Home Page', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield protractor_1.browser.get("https://rahulshettyacademy.com/angularpractice/");
}));
cucumber_1.When('I will enter the user details and submit', () => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield hpObj.name.sendKeys("Anu");
    yield hpObj.email.sendKeys("test@test.com");
    yield hpObj.password.sendKeys("password");
    yield hpObj.iceCreamCheckbox.click();
    yield hpObj.gender.click();
    yield hpObj.employmentStatus.first().click();
}));
cucumber_1.When('I will enter the {string} in username field', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield hpObj.name.sendKeys(string);
}));
cucumber_1.When('I will enter the {string} in email field', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield hpObj.email.sendKeys(string);
}));
cucumber_1.Then('I will validate the {string} message', (message) => __awaiter(void 0, void 0, void 0, function* () {
    // Write code here that turns the phrase above into concrete actions
    yield hpObj.submit.click();
    yield hpObj.successMessage.getText().then((text) => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.sleep(3000);
        console.log(text);
        expect(text).to.contain(message);
    }));
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZVBhZ2VTRC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1N0ZXBEZWZpbml0aW9ucy9Ib21lUGFnZVNELnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQTZDO0FBQzdDLDBEQUF1RDtBQUN2RCwyQ0FBcUM7QUFDckMsZ0RBQXdCO0FBRXhCLElBQUksS0FBSyxHQUFHLElBQUksdUJBQVUsQ0FBQTtBQUMxQixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBR3pCLGdCQUFLLENBQUMsNENBQTRDLEVBQUUsR0FBUyxFQUFFO0lBQzNELG9FQUFvRTtJQUNwRSxNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7QUFDekUsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxHQUFTLEVBQUU7SUFDeEQsb0VBQW9FO0lBQ3BFLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM1QyxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3JDLE1BQU0sS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUMzQixNQUFNLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztBQUVqRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDZDQUE2QyxFQUFFLENBQU8sTUFBTSxFQUFFLEVBQUU7SUFDakUsb0VBQW9FO0lBQ3BFLE1BQU0sS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDdEMsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQywwQ0FBMEMsRUFBRSxDQUFPLE1BQU0sRUFBRSxFQUFFO0lBQzlELG9FQUFvRTtJQUNwRSxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFJSCxlQUFJLENBQUMsc0NBQXNDLEVBQUUsQ0FBTyxPQUFPLEVBQUUsRUFBRTtJQUMzRCxvRUFBb0U7SUFDcEUsTUFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzNCLE1BQU0sS0FBSyxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBTyxJQUFZLEVBQUUsRUFBRTtRQUM3RCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUEsQ0FBQyxDQUFDIn0=