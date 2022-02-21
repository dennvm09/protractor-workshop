import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page/personal-information.page';

const baseUrl = 'https://www.tutorialspoint.com/selenium/selenium_automation_practice.htm';

describe('Fill personal information', () => {
  beforeAll(async () => {
    await browser.get(baseUrl);
  });
  describe('Fill form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const userInfo = {
      firstName: 'Alejandro',
      lastName: 'Perdomo',
      sex: 'Male',
      experience: 7,
      profession: ['Automation Tester'],
      tools: ['Selenium Webdriver'],
      continent: 'South America',
      commands: [
        'Browser Commands',
        'Navigation Commands',
        'Switch Commands',
        'Wait Commands',
        'WebElement Commands']
    };
    beforeAll(async () => {
      await personalInformationPage.submitUserInfo(userInfo);
    });
    it('then should be have a title', async () => {
      expect(await personalInformationPage.getPageTitle()).toEqual('Selenium - Automation Practice Form');
    });
  });
});
