import { browser, by, ElementFinder } from 'protractor';

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
    await this.userEle.sendKeys(userName);
    await this.passwordEle.sendKeys(passwd);
    await this.loginBtnEle.click();
  }
}
