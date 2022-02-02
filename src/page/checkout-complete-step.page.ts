import { browser, by, WebElement } from 'protractor';

export class CheckoutCompletePage {
  private finalMessgaEle: WebElement;

  constructor() {
    this.finalMessgaEle = browser.findElement(by.className('complete-text'));
  }

  public async getFinalMessage(): Promise<void> {
    expect(await this.finalMessgaEle.getText()).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  }
}
