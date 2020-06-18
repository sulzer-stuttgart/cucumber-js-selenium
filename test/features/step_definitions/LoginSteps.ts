import {Given, Then, After, AfterAll, Status} from 'cucumber'
import {Builder, By, Capabilities, Key, until} from 'selenium-webdriver'
import { expect } from 'chai';

var chrome = require('selenium-webdriver/chrome');

const driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();

 Given('I enter Porsche ID {string}', async (email: string) => {
          await driver.get('https://preview-profile.porsche.com/myprofile/de/de_DE/personal-data');
          await driver.wait(until.elementLocated(By.xpath('//*[@data-protractor-id="username"]/label/input')));
          await driver.findElement(By.xpath('//*[@data-protractor-id="username"]/label/input')).sendKeys(email);
         });

 Given('I enter password {string}', async (password: string) => {
          await driver.wait(until.elementLocated(By.xpath('//*[@data-protractor-id="password"]/label/input')));
          await driver.findElement(By.xpath('//*[@data-protractor-id="password"]/label/input')).sendKeys(password);
         });
 Given('I click on login', async () => {
          await driver.wait(until.elementLocated(By.xpath('//*[@data-protractor-id="log-in"]/button')));
          await driver.findElement(By.xpath('//*[@data-protractor-id="log-in"]/button')).click();
         });


 Then('I should be logged', {timeout: 10000}, async () => {
           await driver.wait(until.elementLocated(By.tagName('myprofile-name-display')));
           var loggedUser = await driver.findElement(By.xpath('//*[@id="cdk-accordion-child-0"]/div/div[1]/myprofile-name-widget/p-grid/p-grid-item[2]/myprofile-name-display/p-text')).getText();
           expect(loggedUser).to.equal('Mustafa Masetic');
         });

 After((scenario) => {
     if (scenario.result.status === Status.FAILED) {
         return driver.takeScreenshot().then((screenShot, error) => {
             if (!error) {
                 var date  = new Date();
                 require('fs').writeFile(`output/${date.toString()}.png`, screenShot, 'base64', function(error) {
                     console.log(error);
                 });
             }
         });
     }
 });

 AfterAll('Close Selenium Webdriver', async () => {
           await driver.quit();
         });


