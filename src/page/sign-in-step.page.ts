import { browser, by, WebElement } from 'protractor';

export class SignInPage {
  private userEle : WebElement;

  private passwordEle: WebElement;

  private loginBtnEle: WebElement;

  constructor() {
    this.userEle = browser.findElement(by.id('user-name'));
    this.passwordEle = browser.findElement(by.id('password'));
    this.loginBtnEle = browser.findElement(by.id('login-button'));
  }

  public async goToInventoryMenu(): Promise<void> {
    const userName = 'standard_user';
    const passwd = 'secret_sauce';

    await this.userEle.sendKeys(userName);
    await this.passwordEle.sendKeys(passwd);
    await this.loginBtnEle.click();
  }
}
