import {
  by, element, ElementArrayFinder
} from 'protractor';

export class InventoryPage {
  private products: ElementArrayFinder;

  constructor() {
    this.products = element.all(by.className('inventory_item'));
  }

  private findByProduct(name: string) {
    return this.products.filter((produ) => produ.element(by.className('inventory_item_name')).getText().then((currentName) => currentName === name)).first();
  }

  public async chooseProduct(productName: string) {
    const finalProduct = this.findByProduct(productName);
    await finalProduct.click();
  }
}
