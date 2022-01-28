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


    await userEle.sendKeys(userName);
    await passEle.sendKeys(passwd);
    await loginBtnEle.click();

    const buyBtnEle = browser.findElement(by.id('add-to-cart-sauce-labs-bolt-t-shirt'));
    await buyBtnEle.click();
    const cartBtnEle = browser.findElement(by.id('shopping_cart_container'));
    await cartBtnEle.click();
    const checkBtnEle = browser.findElement(by.id('checkout'));
    await checkBtnEle.click();

    const firtNameEle = browser.findElement(by.id('first-name'));
    const lastNameEle = browser.findElement(by.id('last-name'));
    const zipCodeEle = browser.findElement(by.id('postal-code'));
    const continueBtnEle = browser.findElement(by.id('continue'));

    await firtNameEle.sendKeys(firstName);
    await lastNameEle.sendKeys(lastName);
    await zipCodeEle.sendKeys(zipCode);
    await continueBtnEle.click();

    const finishBtnEle = browser.findElement(by.id('finish'));
    await finishBtnEle.click();
  });
  it('then should be bought a t-shirt', async () => {
    expect(await browser.findElement(by.className('complete-text')).getText()).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  });
});
