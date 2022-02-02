import { browser, by, WebElement } from 'protractor';

export class ShoppingCartPage {
  private checkoutBtnEle: WebElement;

  constructor() {
    this.checkoutBtnEle = browser.findElement(by.id('checkout'));
  }

  public async goToCheckout(): Promise<void> {
    await this.checkoutBtnEle.click();
  }
}
