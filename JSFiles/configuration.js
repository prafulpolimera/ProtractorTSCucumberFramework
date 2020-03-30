"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const reporter = __importStar(require("cucumber-html-reporter"));
exports.config = {
    //To start selenum server using a specific address
    //seleniumAddress: 'http://localhost:4444/wd/hub',
    //To start / run tests on selenium server directly
    directConnect: true,
    //To use cucumber framework
    framework: 'custom',
    //Path relative to the current config file
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    //To use the specific browser
    capabilities: {
        browserName: 'chrome'
    },
    //To run tests on multiple browsers simultaneously
    // multiCapabilities: [{
    // 'browserName': 'firefox'
    // }, {
    // 'browserName': 'chrome'
    // }],
    //Relative Path to the feature files
    specs: ['../features/homePage.feature'],
    //Relative path to create step definitions
    cucumberOpts: {
        // tags:'@RegressionTest', //To run scenarios with this tag
        format: 'json:./Reports/report.json',
        require: [
            './StepDefinitions/*.js',
            './timeout.js',
            './TestHooks/*.js'
        ]
    },
    onComplete: () => {
        var options = {
            theme: 'bootstrap',
            jsonFile: './Reports/report.json',
            output: './Reports/testResult.html',
            reportSuiteAsScenarios: true,
            launchReport: true,
            metadata: {
                'App Version': '',
                'Test Environment': '',
                'Browser': '',
                'Platform': '',
                'Parallel': '',
                'Executed': 'Remote'
            }
        };
        reporter.generate(options);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsaUVBQW1EO0FBRXhDLFFBQUEsTUFBTSxHQUFXO0lBRXhCLGtEQUFrRDtJQUNsRCxrREFBa0Q7SUFFbEQsa0RBQWtEO0lBQ2xELGFBQWEsRUFBRSxJQUFJO0lBRW5CLDJCQUEyQjtJQUMzQixTQUFTLEVBQUUsUUFBUTtJQUVuQiwwQ0FBMEM7SUFDMUMsYUFBYSxFQUFFLE9BQU8sQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUM7SUFFL0QsNkJBQTZCO0lBQzdCLFlBQVksRUFBRTtRQUNWLFdBQVcsRUFBRSxRQUFRO0tBQ3hCO0lBRUQsa0RBQWtEO0lBQ2xELHdCQUF3QjtJQUN4QiwyQkFBMkI7SUFDM0IsT0FBTztJQUNQLDBCQUEwQjtJQUMxQixNQUFNO0lBRU4sb0NBQW9DO0lBQ3BDLEtBQUssRUFBRSxDQUFDLDhCQUE4QixDQUFDO0lBRXZDLDBDQUEwQztJQUMxQyxZQUFZLEVBQUU7UUFFViwyREFBMkQ7UUFFM0QsTUFBTSxFQUFFLDRCQUE0QjtRQUVwQyxPQUFPLEVBQUU7WUFDTCx3QkFBd0I7WUFDeEIsY0FBYztZQUNkLGtCQUFrQjtTQUNyQjtLQUNKO0lBRUQsVUFBVSxFQUFFLEdBQUcsRUFBRTtRQUNiLElBQUksT0FBTyxHQUFHO1lBQ1YsS0FBSyxFQUFFLFdBQVc7WUFDbEIsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsMkJBQTJCO1lBQ25DLHNCQUFzQixFQUFFLElBQUk7WUFDNUIsWUFBWSxFQUFFLElBQUk7WUFDbEIsUUFBUSxFQUFFO2dCQUNOLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixrQkFBa0IsRUFBRSxFQUFFO2dCQUN0QixTQUFTLEVBQUUsRUFBRTtnQkFDYixVQUFVLEVBQUUsRUFBRTtnQkFDZCxVQUFVLEVBQUUsRUFBRTtnQkFDZCxVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNKLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Q0FDSixDQUFBIn0=