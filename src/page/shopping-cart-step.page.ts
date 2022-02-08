import { browser, by, ElementFinder } from 'protractor';

export class ShoppingCartPage {
  private checkoutBtnEle: ElementFinder;

  constructor() {
    this.checkoutBtnEle = browser.element(by.id('checkout'));
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutBtnEle.click();
  }
}
