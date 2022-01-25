import { browser } from 'protractor';
import { config } from '../protractor/local.config';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    beforeEach(async () => {
      browser.waitForAngularEnabled(false);
    });
    beforeEach(() => {
      browser.get(config.baseUrl);
    });
    it('then should have a title', async () => {
      expect(browser.driver.getTitle()).toEqual('Google');
    });
  });
});
