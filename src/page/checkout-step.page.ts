import { browser, by, WebElement } from 'protractor';

export class CheckoutPage {
  private firstNameEle: WebElement;

  private lastNameEle: WebElement;

  private zipCodeEle: WebElement;

  private continueBtnEle: WebElement;

  constructor() {
    this.firstNameEle = browser.findElement(by.id('first-name'));
    this.lastNameEle = browser.findElement(by.id('last-name'));
    this.zipCodeEle = browser.findElement(by.id('postal-code'));
    this.continueBtnEle = browser.findElement(by.id('continue'));
  }

  public async goToSummary(): Promise<void> {
    const firstName = 'Dennys';
    const lastName = 'Mosquera';
    const zipCode = '720016';

    await this.firstNameEle.sendKeys(firstName);
    await this.lastNameEle.sendKeys(lastName);
    await this.zipCodeEle.sendKeys(zipCode);
    await this.continueBtnEle.click();
  }
}