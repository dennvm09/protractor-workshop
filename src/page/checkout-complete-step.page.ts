import { browser, by, ElementFinder } from 'protractor';

export class CheckoutCompletePage {
  private finalMessgaEle: ElementFinder;

  constructor() {
    this.finalMessgaEle = browser.element(by.className('complete-text'));
  }

  public async getFinalMessage(): Promise<string> {
    return this.finalMessgaEle.getText();
  }
}
