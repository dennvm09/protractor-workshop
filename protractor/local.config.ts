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
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--disable-popup-blocking', '--no-default-browser-check', '--window-size=1000,800'],
      prefs: { credentials_enable_service: false }
    }
  },
  onPrepare: () => {
    reporter();
    browser.waitForAngularEnabled(false);
    browser.manage().timeouts().implicitlyWait(0);
  }
};
