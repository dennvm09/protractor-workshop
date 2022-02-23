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
    this.pageTitleEle = browser.element(by.className('mui-col-md-6')).all(by.tagName('h1')).first();
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
    // await browser.executeScript('arguments[0].click()', this.sexEle);
    await browser.actions().mouseMove(this.sexEle).perform();
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.sexEle), 500, 'No access sex'));
    await this.sexEle.click();
  }

  private async selectExperience(experience: string) {
    this.experienceEle = browser.element(by.css(`input[name="exp"][value="${experience}"]`));
    await browser.actions().mouseMove(this.experienceEle).perform();
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.experienceEle), 500, 'No access experience'));
  }

  private async selectProfession(profession: string) {
    this.professionEle = browser.element(by.css(`input[name="profession"][value="${profession}"]`));
    await browser.actions().mouseMove(this.professionEle).perform();
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.professionEle), 500, 'No access profession'));
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
    await browser.actions().mouseMove(this.continentEle).perform();
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.continentEle), 500, 'No access continent'));
    await this.continentEle.click();
  }

  private async selectCommand(command: string) {
    this.commandsEle = browser.element(by.css('select[name="selenium_commands"]')).element(by.cssContainingText('option', command));
    await browser.actions().mouseMove(this.commandsEle).perform();
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.commandsEle), 500, 'No access command'));
    await this.commandsEle.click();
  }

  public async submitUserInfo(userInfo): Promise<void> {
    await this.acceptPageCookie();
    await this.fillForm(userInfo);
    await browser.actions().mouseMove(this.sendBtnEle).perform();
    await (browser.wait(ExpectedConditions.elementToBeClickable(this.sendBtnEle), 500, 'No access'));
    await this.sendBtnEle.click();
    await (await browser.switchTo().alert()).accept();
  }
}
