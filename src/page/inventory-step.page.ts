import { browser, by, WebElement } from 'protractor';

export class InventoryPage {
  private buyBtnEle : WebElement;

  private cartBtnEle: WebElement;

  constructor() {
    this.buyBtnEle = browser.findElement(by.id('add-to-cart-sauce-labs-bolt-t-shirt'));
    this.cartBtnEle = browser.findElement(by.id('shopping_cart_container'));
  }

  public async goToShoppingCart(): Promise<void> {
    await this.buyBtnEle.click();
    await this.cartBtnEle.click();
  }
}
