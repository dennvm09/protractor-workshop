import {
  browser, by, ElementFinder, ExpectedConditions
} from 'protractor';

export class ShoppingCartPage {
  private checkoutBtnEle: ElementFinder;

  constructor() {
    this.checkoutBtnEle = browser.element(by.id('checkout'));
  }

  public async goToCheckout(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.checkoutBtnEle), 10000, 'It is not possible to access.');
    await this.checkoutBtnEle.click();
  }
}
