/* eslint-disable protractor/no-repetitive-selectors */
import { $, browser } from 'protractor';
import { config } from '../protractor/local.config';

describe('Buy a t-shirt', () => {
  beforeEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
  });

  beforeEach(() =>{
    browser.wait(browser.get(config.baseBuyUrl),10000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('#block_top_menu > ul > li:nth-child(3) > a').click(), 3000, "Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('#center_column a.button.ajax_add_to_cart_button.btn.btn-default').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('[style*="display: block;"] .button-container > a').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('.cart_navigation span').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('#email').sendKeys('aperdomobo@gmail.com'),3000,"Not possible to access.");
    browser.wait($('#passwd').sendKeys('WorkshopProtractor'),3000,"Not possible to access.");
    browser.wait($('#SubmitLogin > span').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('#center_column > form > p > button > span').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('#cgv').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('#form > p > button > span').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('#HOOK_PAYMENT > div:nth-child(1) > div > p > a').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    browser.wait($('#cart_navigation > button > span').click(),3000,"Not possible to access.");
  });
  beforeEach(() =>{
    expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });

  it('then should be bought a t-shirt', async () => {
    browser.waitForAngularEnabled(false);
  });
});
