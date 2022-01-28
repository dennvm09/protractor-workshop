/* eslint-disable protractor/no-describe-selectors */
import { browser, by } from 'protractor';

const baseUrl = 'https://www.saucedemo.com/';

describe('Buy a t-shirt', () => {

  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    const userName = 'standard_user';
    const passwd = 'secret_sauce';

    const firstName = 'Dennys';
    const lastName = 'Mosquera';
    const zipCode = '720016';

    await browser.wait(browser.get(baseUrl), 10000, "Not possible to access 1.");

    const userEle = browser.findElement(by.id('user-name'));
    const passEle = browser.findElement(by.id('password'));
    const loginBtnEle = browser.findElement(by.id('login-button'));

    await browser.wait(userEle.sendKeys(userName), 4000, "Invalid user.");
    await browser.wait(passEle.sendKeys(passwd), 4000, "Invalid password.");
    await browser.wait(loginBtnEle.click(), 3000, "Not possible to access.");

    const buyBtnEle = browser.findElement(by.id('add-to-cart-sauce-labs-bolt-t-shirt'));
    await browser.wait(buyBtnEle.click(), 4000, "Not possible to access.");
    const cartBtnEle = browser.findElement(by.id('shopping_cart_container'));
    await browser.wait(cartBtnEle.click(), 4000, "Not possible to access.");
    const checkBtnEle = browser.findElement(by.id('checkout'));
    await browser.wait(checkBtnEle.click(), 4000, "Not possible to access.");

    const firtNameEle = browser.findElement(by.id('first-name'));
    const lastNameEle = browser.findElement(by.id('last-name'));
    const zipCodeEle = browser.findElement(by.id('postal-code'));
    const continueBtnEle = browser.findElement(by.id('continue'));

    await browser.wait(firtNameEle.sendKeys(firstName), 4000, "Invalid name.");
    await browser.wait(lastNameEle.sendKeys(lastName), 4000, "Invalid lastname.");
    await browser.wait(zipCodeEle.sendKeys(zipCode), 4000, "Invalid zipcode.");
    await browser.wait(continueBtnEle.click(), 3000, "Not possible to access.");

    const finishBtnEle = browser.findElement(by.id('finish'));
    await browser.wait(finishBtnEle.click(), 3000, "Not possible to access.");

  });
  it('then should be bought a t-shirt', async () => {
    expect(await browser.findElement(by.className('complete-text')).getText()).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  });
});
