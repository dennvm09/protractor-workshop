import {
  browser, by, ElementFinder, ExpectedConditions
} from 'protractor';

export class InventoryPage {
  private buyBtnEle : ElementFinder;

  private cartBtnEle: ElementFinder;

  constructor() {
    this.buyBtnEle = browser.element(by.id('add-to-cart-sauce-labs-bolt-t-shirt'));
    this.cartBtnEle = browser.element(by.className('shopping_cart_link'));
  }

  public async goToShoppingCart(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.buyBtnEle), 10000, 'It is not possible to access.');
    await this.buyBtnEle.click();
    await browser.wait(ExpectedConditions.elementToBeClickable(this.cartBtnEle), 10000, 'It is not possible to access.');
    await this.cartBtnEle.click();
  }
}
