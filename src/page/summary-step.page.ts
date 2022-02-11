import {
  browser, by, ElementFinder, ExpectedConditions
} from 'protractor';

export class SummaryPage {
  private finishBtnEle: ElementFinder;

  constructor() {
    this.finishBtnEle = browser.element(by.id('finish'));
  }

  public async goToCheckoutComplete(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.finishBtnEle), 10000, 'It is not possible to access.');
    await this.finishBtnEle.click();
  }
}
