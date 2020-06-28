import {Given, When, Then, After, AfterAll, Status} from 'cucumber'
import {By, until} from 'selenium-webdriver'

import { expect } from 'chai';

 Given('I am on Porsche login page', {timeout: 15000}, async function () {
          await this.driver.get('https://profile.porsche.com/myprofile/de/de_DE/personal-data');
         });
 When(/I enter Porsche ID (.*)/, {timeout: 10000}, async function(email: string) {
          await this.driver.wait(until.elementLocated(By.xpath('//*[@data-protractor-id="username"]/label/input')));
          await this.driver.findElement(By.xpath('//*[@data-protractor-id="username"]/label/input')).sendKeys(email);
         });
 When(/I enter password (.*)/, async function(password: string) {
          await this.driver.wait(until.elementLocated(By.xpath('//*[@data-protractor-id="password"]/label/input')));
          await this.driver.findElement(By.xpath('//*[@data-protractor-id="password"]/label/input')).sendKeys(password);
         });
 When('I click on login', {timeout: 10000}, async function() {
          await this.driver.wait(until.elementLocated(By.xpath('//*[@data-protractor-id="log-in"]/button')));
          await this.driver.findElement(By.xpath('//*[@data-protractor-id="log-in"]/button')).click();
         });
 Then(/I should be logged in as a (.*)/, {timeout: 15000}, async function(name: string) {
           await this.driver.wait(until.elementLocated(By.xpath('//*/myprofile-name-display/p-text')));
           await this.driver.sleep(2000);
           var loggedUser = await this.driver.findElement(By.xpath('//*/myprofile-name-display/p-text')).getText();
           expect(loggedUser).to.equal(name);
         });