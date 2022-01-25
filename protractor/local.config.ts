import { Config, browser} from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  baseUrl: 'http://www.google.com',
  baseBuyUrl: 'http://automationpractice.com/',
  getPageTimeout: 10000,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: async () => {
    await browser.waitForAngularEnabled(false);
    reporter();
  }
};
