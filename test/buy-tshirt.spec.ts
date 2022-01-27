/* eslint-disable protractor/no-describe-selectors */
import { browser, by } from 'protractor';
import { config } from '../protractor/local.config';


describe('Buy a t-shirt', () => {

  beforeEach(async() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    const username = 'standard_user';
    const passwd = 'secret_sauce';

    const firstname = 'Dennys';
    const lastname = 'Mosquera';
    const zipcode = '720016';

    await browser.wait(browser.get(config.baseBuyUrl), 10000, "Not possible to access 1.");

    const user_ele = browser.findElement(by.id('user-name'));
    const pass_ele = browser.findElement(by.id('password'));
    const loginbtn_ele = browser.findElement(by.id('login-button'));

    await browser.wait(user_ele.sendKeys(username), 4000, "Invalid user.");
    await browser.wait(pass_ele.sendKeys(passwd), 4000, "Invalid password.");
    await browser.wait(loginbtn_ele.click(), 3000, "Not possible to access.");

    const buybtn_ele = browser.findElement(by.id('add-to-cart-sauce-labs-bolt-t-shirt'));
    await browser.wait(buybtn_ele.click(), 4000, "Not possible to access.");
    const cartbtn_ele = browser.findElement(by.id('shopping_cart_container'));
    await browser.wait(cartbtn_ele.click(), 4000, "Not possible to access.");
    const checkbtn_ele = browser.findElement(by.id('checkout'));
    await browser.wait(checkbtn_ele.click(), 4000, "Not possible to access.");

    const firstname_ele = browser.findElement(by.id('first-name'));
    const lastname_ele = browser.findElement(by.id('last-name'));
    const zipcode_ele = browser.findElement(by.id('postal-code'));
    const continuebtn_ele = browser.findElement(by.id('continue'));

    await browser.wait(firstname_ele.sendKeys(firstname), 4000, "Invalid name.");
    await browser.wait(lastname_ele.sendKeys(lastname), 4000, "Invalid lastname.");
    await browser.wait(zipcode_ele.sendKeys(zipcode), 4000, "Invalid zipcode.");
    await browser.wait(continuebtn_ele.click(), 3000, "Not possible to access.");

    const finishbtn_ele = browser.findElement(by.id('finish'));
    await browser.wait(finishbtn_ele.click(), 3000, "Not possible to access.");

  });
  it('then should be bought a t-shirt', async () => {
    expect(browser.findElement(by.className('complete-text')).getText()).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
    browser.waitForAngularEnabled(false);
  });
});
