import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  getPageTimeout: 30000,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  onPrepare: () => {
    reporter();
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(0);
  }
};
