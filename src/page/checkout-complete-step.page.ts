import {
  browser, by, ElementFinder, ExpectedConditions
} from 'protractor';

export class CheckoutCompletePage {
  private finalMessgaEle: ElementFinder;

  constructor() {
    this.finalMessgaEle = browser.element(by.className('complete-text'));
  }

  public async getFinalMessage(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.finalMessgaEle), 10000, 'It is not possible to access.');
    return this.finalMessgaEle.getText();
  }
}
