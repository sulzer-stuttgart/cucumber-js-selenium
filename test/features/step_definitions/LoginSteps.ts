import {Given, Then, After, AfterAll, Status} from 'cucumber'
import {By, until} from 'selenium-webdriver'

import { expect } from 'chai';

 Given('I enter Porsche ID {string}', {timeout: 15000}, async function (email: string) {
          await this.driver.get('https://preview-profile.porsche.com/myprofile/de/de_DE/personal-data');
          await this.driver.wait(until.elementLocated(By.xpath('/ *//*[@data-protractor-id="username"]/label/input')));
          await this.driver.findElement(By.xpath('/ *//*[@data-protractor-id="username"]/label/input')).sendKeys(email);
         });

 Given('I enter password {string}', async function(password: string) {
          await this.driver.wait(until.elementLocated(By.xpath('/ *//*[@data-protractor-id="password"]/label/input')));
          await this.driver.findElement(By.xpath('/ *//*[@data-protractor-id="password"]/label/input')).sendKeys(password);
         });
 Given('I click on login', async function() {
          await this.driver.wait(until.elementLocated(By.xpath('/ *//*[@data-protractor-id="log-in"]/button')));
          await this.driver.findElement(By.xpath('/ *//*[@data-protractor-id="log-in"]/button')).click();
         });


 Then('I should be logged', {timeout: 10000}, async function() {
           await this.driver.wait(until.elementLocated(By.tagName('myprofile-name-display')));
           var loggedUser = await this.driver.findElement(By.xpath('/ *//*[@id="cdk-accordion-child-0"]/div/div[1]/myprofile-name-widget/p-grid/p-grid-item[2]/myprofile-name-display/p-text')).getText();
           expect(loggedUser).to.equal('Mustafa Masetic');
         });