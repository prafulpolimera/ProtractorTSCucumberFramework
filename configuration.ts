import { Config } from 'protractor';
import * as reporter from 'cucumber-html-reporter';

export let config: Config = {

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
}