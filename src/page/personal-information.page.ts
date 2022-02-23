/* eslint-disable protractor/no-browser-sleep */
import {
  browser, by, ElementFinder, ExpectedConditions
} from 'protractor';

export class PersonalInformationPage {
  private pageTitleEle : ElementFinder;

  private firstNameEle : ElementFinder;

  private lastNameEle: ElementFinder;

  private sexEle : ElementFinder;

  private experienceEle : ElementFinder;

  private professionEle : ElementFinder;

  private toolsEle : ElementFinder;

  private continentEle : ElementFinder;

  private commandsEle : ElementFinder;

  private sendBtnEle : ElementFinder;

  private acceptCookieBtn : ElementFinder;

  constructor() {
    this.pageTitleEle = browser.element(by.className('tutorial-content')).all(by.tagName('h1')).first();
    this.firstNameEle = browser.element(by.name('firstname'));
    this.lastNameEle = browser.element(by.name('lastname'));
    this.sendBtnEle = browser.element(by.name('submit'));
    this.acceptCookieBtn = browser.element(by.id('banner-accept'));
  }

  public async getPageTitle(): Promise<string> {
    return this.pageTitleEle.getText();
  }

  public async fillForm(userInfo) {
    await this.firstNameEle.sendKeys(userInfo.firstName);
    await this.lastNameEle.sendKeys(userInfo.lastName);
    await this.selectSex(userInfo.sex);

    await this.selectExperience(userInfo.experience);
    await this.experienceEle.click();

    for (const profe of userInfo.profession) {
      this.selectProfession(profe);
    }
    for (const tool of userInfo.tools) {
      this.selectTool(tool);
    }
    for (const conti of userInfo.continent) {
      this.selectContinent(conti);
    }
    for (const comma of userInfo.commands) {
      this.selectCommand(comma);
    }
  }

  private async acceptPageCookie() {
    await this.acceptCookieBtn.click();
  }

  private async selectSex(sex: string) {
    this.sexEle = browser.element(by.css(`input[name="sex"][value="${sex}"]`));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.sexEle), 500, 'No access sex'));
    browser.executeScript('arguments[0].click();', this.sexEle);
  }

  private async selectExperience(experience: string) {
    this.experienceEle = browser.element(by.css(`input[name="exp"][value="${experience}"]`));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.experienceEle), 500, 'No access experience'));
    browser.executeScript('arguments[0].click();', this.experienceEle);
  }

  private async selectProfession(profession: string) {
    this.professionEle = browser.element(by.css(`input[name="profession"][value="${profession}"]`));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.professionEle), 500, 'No access profession'));
    browser.executeScript('arguments[0].click();', this.professionEle);
  }

  private async selectTool(tool: string) {
    this.toolsEle = browser.element(by.css(`input[name="tool"][value="${tool}"]`));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.toolsEle), 500, 'No access tool'));
    browser.executeScript('arguments[0].click();', this.toolsEle);
  }

  private async selectContinent(continent: string) {
    this.continentEle = browser.element(by.css('select[name="continents"]')).element(by.cssContainingText('option', continent));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.continentEle), 500, 'No access continent'));
    browser.executeScript('arguments[0].click();', this.continentEle);
  }

  private async selectCommand(command: string) {
    this.commandsEle = browser.element(by.css('select[name="selenium_commands"]')).element(by.cssContainingText('option', command));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.commandsEle), 500, 'No access command'));
    browser.executeScript('arguments[0].click();', this.commandsEle);
  }

  public async submitUserInfo(userInfo): Promise<void> {
    await this.acceptPageCookie();
    await this.fillForm(userInfo);
    await (browser.sleep(1000));
    await this.sendBtnEle.click();
    await browser.wait((browser.switchTo().alert()).accept(), 3000, '');
  }
}
