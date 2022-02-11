import {
  browser, by, ElementFinder, ExpectedConditions
} from 'protractor';

export class SignInPage {
  private userEle : ElementFinder;

  private passwordEle: ElementFinder;

  private loginBtnEle: ElementFinder;

  constructor() {
    this.userEle = browser.element(by.id('user-name'));
    this.passwordEle = browser.element(by.id('password'));
    this.loginBtnEle = browser.element(by.id('login-button'));
  }

  public async logIn(userName: string, passwd: string): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(this.userEle), 50000, 'It is not possible to access.');
    await this.userEle.sendKeys(userName);
    await browser.wait(ExpectedConditions.presenceOf(this.passwordEle), 50000, 'It is not possible to access.');
    await this.passwordEle.sendKeys(passwd);
    await browser.wait(ExpectedConditions.elementToBeClickable(this.loginBtnEle), 50000, 'It is not possible to access.');
    await this.loginBtnEle.click();
  }
}
