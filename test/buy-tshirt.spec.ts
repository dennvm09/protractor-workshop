/* eslint-disable protractor/no-describe-selectors */
import { browser, by } from 'protractor';
import { config } from '../protractor/local.config';


describe('Buy a t-shirt', () => {

  beforeEach(async() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    const username = 'standard_user';
    const passwd = 'secret_sauce';

    await browser.wait(browser.get(config.baseBuyUrl), 10000, "Not possible to access 1.");

    const usersele = browser.findElement(by.id('user-name'));
    const passsele = browser.findElement(by.id('password'));
    const loginbtn = browser.findElement(by.id('login-button'));

    await browser.wait(usersele.sendKeys(username), 4000, "Invalid user.");
    await browser.wait(passsele.sendKeys(passwd), 4000, "Invalid password.");
    await browser.wait(loginbtn.click(), 3000, "Not possible to access.");

  });
  it('then should be bought a t-shirt', async () => {
    expect(browser.findElement(by.className('title')).getText()).toBe('Products');
    browser.waitForAngularEnabled(false);
  });
});
