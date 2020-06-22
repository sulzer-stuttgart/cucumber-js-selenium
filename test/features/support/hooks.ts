// hooks.js
var config_file = '../../../conf/' + (process.env.CONFIG_FILE || 'bs-config') + '.conf.js';
var config = require(config_file).config;
import {Builder} from 'selenium-webdriver'
import { Scenario, Status, Before, BeforeAll, After, AfterAll, setWorldConstructor} from 'cucumber'

var username = process.env.BROWSERSTACK_USERNAME || config.user;
var accessKey = process.env.BROWSERSTACK_ACCESS_KEY || config.key;

Before(function (scenario) {
    var task_id = parseInt(process.env.TASK_ID || '0');
    var caps = config.capabilities[task_id];
    caps['browserstack.user'] = username;
    caps['browserstack.key'] = accessKey;
    caps['browserName'] = 'Safari';
    caps['browser_version'] = '13.0';
    caps['os'] = 'OS X';
    caps['os_version'] = 'Catalina';
    caps['resolution'] = '1024x768';
    caps['project'] = 'Browserstack integration with Cucumber';
    caps['build'] = `Regression - ${new Date().toLocaleString()}`;
    caps['name'] = scenario.pickle.name;

    this.driver = new Builder()
        .usingServer('http://' + config.server + '/wd/hub')
        .withCapabilities(caps)
        .build();
});

After({timeout: 10000}, async function() {
    await this.driver.quit();
});


