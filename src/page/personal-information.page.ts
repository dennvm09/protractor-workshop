/* eslint-disable no-restricted-syntax */
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

  constructor() {
    this.pageTitleEle = browser.element(by.className('mui-col-md-6')).all(by.tagName('h1')).first();
    this.firstNameEle = browser.element(by.name('firstname'));
    this.lastNameEle = browser.element(by.name('lastname'));
    this.sendBtnEle = browser.element(by.name('submit'));
  }

  public async getPageTitle(): Promise<string> {
    return this.pageTitleEle.getText();
  }

  private async selectSex(sex: string) {
    this.sexEle = browser.element(by.css(`input[name="sex"][value="${sex}"]`));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.sexEle), 500, 'No access sex'));
    await browser.actions().mouseMove(this.sexEle).perform();
    await this.sexEle.click();
  }

  private async selectExperience(experience: string) {
    this.experienceEle = browser.element(by.css(`input[name="exp"][value="${experience}"]`));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.experienceEle), 500, 'No access experience'));
    await browser.actions().mouseMove(this.experienceEle).perform();
    await this.experienceEle.click();
  }

  private async selectProfession(profession: string) {
    this.professionEle = browser.element(by.css(`input[name="profession"][value="${profession}"]`));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.professionEle), 500, 'No access profession'));
    await browser.actions().mouseMove(this.professionEle).perform();
    await this.professionEle.click();
  }

  private async selectTool(tool: string) {
    this.toolsEle = browser.element(by.css(`input[name="tool"][value="${tool}"]`));
    await browser.actions().mouseMove(this.toolsEle).perform();
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.toolsEle), 500, 'No access tool'));
    await this.toolsEle.click();
  }

  private async selectContinent(continent: string) {
    this.continentEle = browser.element(by.css('select[name="continents"]')).element(by.cssContainingText('option', continent));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.continentEle), 500, 'No access continent'));
    await browser.actions().mouseMove(this.continentEle).perform();
    await this.continentEle.click();
  }

  private async selectCommand(command: string) {
    this.commandsEle = browser.element(by.css('select[name="selenium_commands"]')).element(by.cssContainingText('option', command));
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.commandsEle), 500, 'No access command'));
    await browser.actions().mouseMove(this.commandsEle).perform();
    await this.commandsEle.click();
  }

  public async fillForm(userInfo) {
    await this.firstNameEle.sendKeys(userInfo.firstName);
    await this.lastNameEle.sendKeys(userInfo.lastName);
    this.selectSex(userInfo.sex);
    this.selectExperience(userInfo.experience);

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

  public async submitUserInfo(userInfo): Promise<void> {
    await this.fillForm(userInfo);
    await browser.actions().mouseMove(this.sendBtnEle).perform();
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.sendBtnEle), 500, 'No access'));
    await this.sendBtnEle.click();
    await (await browser.switchTo().alert()).accept();
  }
}
