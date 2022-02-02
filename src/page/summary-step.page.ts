import { browser, by, WebElement } from 'protractor';

export class SummaryPage {
  private finishBtnEle: WebElement;

  constructor() {
    this.finishBtnEle = browser.findElement(by.id('finish'));
  }

  public async goToCheckoutComplete(): Promise<void> {
    await this.finishBtnEle.click();
  }
}
