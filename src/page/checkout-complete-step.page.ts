import { browser, by, WebElement } from 'protractor';

export class CheckoutCompletePage {
  private finalMessgaEle: WebElement;

  constructor() {
    this.finalMessgaEle = browser.findElement(by.className('complete-text'));
  }

  public async getFinalMessage(): Promise<string> {
    return this.finalMessgaEle.getText();
  }
}
