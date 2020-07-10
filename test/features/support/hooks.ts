// hooks.js
var config_file = '../../../conf/' + process.env.CONFIG_FILE + '.conf.js';
var config = require(config_file).config;
import {Builder} from 'selenium-webdriver'
var chrome = require("selenium-webdriver/chrome")
import { Scenario, Status, Before, BeforeAll, After, AfterAll} from 'cucumber'

var username = process.env.BROWSERSTACK_USERNAME || config.user;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY || config.key;
var build = `Regression - ${new Date().toLocaleString()}`;

require('chromedriver');

Before(function (scenario) {
    var caps = config.capabilities;

    if(config.browserstack){
        caps['browserstack.user'] = username;
        caps['browserstack.key'] = accessKey;
        caps['build'] = build;
        caps['name'] = scenario.pickle.name;
        }

    var chromeOptions = new chrome.Options();
    chromeOptions.addArguments('--headless');

    this.driver = new Builder()
       // .usingServer('http://' + config.server + '/wd/hub')
        //.withCapabilities(caps)
        .setChromeOptions(chromeOptions)
        .forBrowser('chrome')
        .build();
});

After({timeout: 10000}, async function() {
    await this.driver.quit();
});


