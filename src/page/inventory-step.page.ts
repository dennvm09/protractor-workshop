import { browser, by, ElementFinder } from 'protractor';

export class InventoryPage {
  private buyBtnEle : ElementFinder;

  private cartBtnEle: ElementFinder;

  constructor() {
    this.buyBtnEle = browser.element(by.id('add-to-cart-sauce-labs-bolt-t-shirt'));
    this.cartBtnEle = browser.element(by.id('shopping_cart_container'));
  }

  public async goToShoppingCart(): Promise<void> {
    await this.buyBtnEle.click();
    await this.cartBtnEle.click();
  }
}
