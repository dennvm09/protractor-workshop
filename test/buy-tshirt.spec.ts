/* eslint-disable protractor/no-describe-selectors */
import { browser, by } from 'protractor';
import { config } from '../protractor/local.config';


describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  beforeEach(() => {
    browser.wait(browser.get(config.baseBuyUrl), 10000, "Not possible to access 1.");
  });

  beforeEach(() => {
    const username = 'standard_user';
    const passwd = 'secret_sauce';

    const usersele = browser.findElement(by.id('user-name'));
    const passsele = browser.findElement(by.id('password'));
    const loginbtn = browser.findElement(by.id('login-button'));

    browser.wait(usersele.sendKeys(username), 4000, "Invalid user.");
    browser.wait(passsele.sendKeys(passwd), 4000, "Invalid password.");
    browser.wait(loginbtn.click(), 3000, "Not possible to access.");


    /** Formas en las que he intentado acceder
    browser.wait(element(by.css('#user-name')).sendKeys(username), 4000, "Invalid user or password.");
    browser.wait(element(by.css('#password')).sendKeys("secret_sauce"), 4000, "Invalid user or password.");
    browser.wait(element(by.css('#login-button')).click(),3000,"Not possible to access.");

    browser.wait(element(by.id('user-name')).sendKeys(username), 4000, "Invalid user or password.");
    browser.wait(element(by.id('password')).sendKeys("secret_sauce"), 4000, "Invalid user or password.");
    browser.wait(element(by.id('login-button')).click(),3000,"Not possible to access.");

    browser.wait($('input#user-name').sendKeys('standard_user'),4000,"Invalid user or password.");
    browser.wait($('input#password').sendKeys('secret_sauce'),4000,"Invalid user or password.");
    browser.wait($('input#login-button').click(),3000,"Invalid user or password.");

    browser.wait($('#user-name').sendKeys('standard_user'),4000,"Invalid user or password.");
    browser.wait($('#password').sendKeys('secret_sauce'),4000,"Invalid user or password.");
    browser.wait($('#login-button').click(),3000,"Invalid user or password.");

    browser.wait(element(by.css("input[id='user-name']")).sendKeys(username), 4000, "Invalid user or password.");
    browser.wait(element(by.css("input[id='password']")).sendKeys("secret_sauce"), 4000, "Invalid user or password.");
    browser.wait(element(by.css("input[id='login-button']")).click(),3000,"Not possible to access.");

    browser.wait(browser.findElement(by.id('user-name')).sendKeys(username), 4000, "message");
    browser.wait(browser.findElement(by.id('password')).sendKeys(passwd), 4000, "message");
    browser.wait(browser.findElement(by.id('login-button')).click(), 4000, "message");*/

  });


  it('then should be bought a t-shirt', async () => {
    expect(browser.findElement(by.className('title')).getText()).toBe('Products');
    browser.waitForAngularEnabled(false);
  });
});
