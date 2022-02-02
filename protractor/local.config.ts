import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  getPageTimeout: 20000,
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    reporter();
    browser.waitForAngularEnabled(false);
  }
};
