import {
  browser, by, ElementFinder, ExpectedConditions
} from 'protractor';

export class CheckoutPage {
  private firstNameEle: ElementFinder;

  private lastNameEle: ElementFinder;

  private zipCodeEle: ElementFinder;

  private continueBtnEle: ElementFinder;

  constructor() {
    this.firstNameEle = browser.element(by.id('first-name'));
    this.lastNameEle = browser.element(by.id('last-name'));
    this.zipCodeEle = browser.element(by.id('postal-code'));
    this.continueBtnEle = browser.element(by.id('continue'));
  }

  public async goToSummary(firstName: string, lastName: string, zipCode: string): Promise<void> {
    await browser.wait(ExpectedConditions.presenceOf(this.firstNameEle), 10000, 'It is not possible to access.');
    await this.firstNameEle.sendKeys(firstName);
    await browser.wait(ExpectedConditions.presenceOf(this.lastNameEle), 10000, 'It is not possible to access.');
    await this.lastNameEle.sendKeys(lastName);
    await browser.wait(ExpectedConditions.presenceOf(this.zipCodeEle), 10000, 'It is not possible to access.');
    await this.zipCodeEle.sendKeys(zipCode);
    await browser.wait(ExpectedConditions.elementToBeClickable(this.continueBtnEle), 10000, 'It is not possible to access.');
    await this.continueBtnEle.click();
  }
}
