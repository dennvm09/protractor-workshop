import { browser, by, ElementFinder } from 'protractor';

export class SummaryPage {
  private finishBtnEle: ElementFinder;

  constructor() {
    this.finishBtnEle = browser.element(by.id('finish'));
  }

  public async goToCheckoutComplete(): Promise<void> {
    await this.finishBtnEle.click();
  }
}
