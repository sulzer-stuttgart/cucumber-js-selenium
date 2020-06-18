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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var cucumber_1 = require("cucumber");
var selenium_webdriver_1 = require("selenium-webdriver");
var chai_1 = require("chai");
var chrome = require('selenium-webdriver/chrome');
var driver = new selenium_webdriver_1.Builder()
    .forBrowser('chrome')
    .setChromeOptions(new chrome.Options().headless())
    .build();
cucumber_1.Given('I enter Porsche ID {string}', function (email) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, driver.get('https://preview-profile.porsche.com/myprofile/de/de_DE/personal-data')];
            case 1:
                _a.sent();
                return [4, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath('//*[@data-protractor-id="username"]/label/input')))];
            case 2:
                _a.sent();
                return [4, driver.findElement(selenium_webdriver_1.By.xpath('//*[@data-protractor-id="username"]/label/input')).sendKeys(email)];
            case 3:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Given('I enter password {string}', function (password) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath('//*[@data-protractor-id="password"]/label/input')))];
            case 1:
                _a.sent();
                return [4, driver.findElement(selenium_webdriver_1.By.xpath('//*[@data-protractor-id="password"]/label/input')).sendKeys(password)];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Given('I click on login', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.xpath('//*[@data-protractor-id="log-in"]/button')))];
            case 1:
                _a.sent();
                return [4, driver.findElement(selenium_webdriver_1.By.xpath('//*[@data-protractor-id="log-in"]/button')).click()];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then('I should be logged', { timeout: 10000 }, function () { return __awaiter(void 0, void 0, void 0, function () {
    var loggedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.tagName('myprofile-name-display')))];
            case 1:
                _a.sent();
                return [4, driver.findElement(selenium_webdriver_1.By.xpath('//*[@id="cdk-accordion-child-0"]/div/div[1]/myprofile-name-widget/p-grid/p-grid-item[2]/myprofile-name-display/p-text')).getText()];
            case 2:
                loggedUser = _a.sent();
                chai_1.expect(loggedUser).to.equal('Mustafa Masetic');
                return [2];
        }
    });
}); });
cucumber_1.After(function (scenario) {
    if (scenario.result.status === cucumber_1.Status.FAILED) {
        return driver.takeScreenshot().then(function (screenShot, error) {
            if (!error) {
                var date = new Date();
                require('fs').writeFile("output/" + date.toString() + ".png", screenShot, 'base64', function (error) {
                    console.log(error);
                });
            }
        });
    }
});
cucumber_1.AfterAll('Close Selenium Webdriver', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, driver.quit()];
            case 1:
                _a.sent();
                return [2];
        }
    });
}); });
