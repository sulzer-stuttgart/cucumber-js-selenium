var reporter = require('cucumber-html-reporter');
var timeStamp = new Date();
var options = {
        theme: 'bootstrap',
        jsonFile: 'test/report/cucumber_report.json',
        output: 'test/report/cucumber_report.html',
        reportSuiteAsScenarios: true,
        scenarioTimestamp: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Mac OS Catalina",
            "Parallel": "Scenarios",
            "Executed": "Remote",
            "Timestamp": timeStamp.toString()
        }
    };

    reporter.generate(options);


    //more info on `metadata` is available in `options` section below.

    //to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.