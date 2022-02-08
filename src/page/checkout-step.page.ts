import { browser, by, ElementFinder } from 'protractor';

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
    await this.firstNameEle.sendKeys(firstName);
    await this.lastNameEle.sendKeys(lastName);
    await this.zipCodeEle.sendKeys(zipCode);
    await this.continueBtnEle.click();
  }
}
