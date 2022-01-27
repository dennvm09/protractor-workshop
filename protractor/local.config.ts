import { Config, browser} from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  baseUrl: 'http://www.google.com',
  baseBuyUrl: 'https://www.saucedemo.com/',
  getPageTimeout: 10000,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: async () => {
    reporter();
    await browser.waitForAngularEnabled(false);
  }
};
