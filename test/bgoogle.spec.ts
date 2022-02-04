import { browser } from 'protractor';

const baseUrl = 'http://www.google.com';

describe('Given a SDET learning protractor', () => {
  describe('when open Google Page', () => {
    beforeEach(async () => {
      await browser.get(baseUrl);
    });
    it('then should have a title', async () => {
      const title = (await browser.driver.getTitle()).toString();
      expect(title).toEqual('Google');
    });
  });
});
