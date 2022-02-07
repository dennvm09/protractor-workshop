/* eslint-disable no-console */
import { browser } from 'protractor';
import {
  SignInPage, InventoryPage, ShoppingCartPage, SummaryPage, CheckoutPage, CheckoutCompletePage
} from '../src/page';

const baseUrl = 'https://www.saucedemo.com/';

describe('Buy a t-shirt', () => {
  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    const userName = 'standard_user';
    const passwd = 'secret_sauce';

    const firstName = 'Dennys';
    const lastName = 'Mosquera';
    const zipCode = '720016';

    await browser.get(baseUrl);

    const signInPage: SignInPage = new SignInPage();
    await signInPage.doLogIn(userName, passwd);

    const inventoryPage: InventoryPage = new InventoryPage();
    await inventoryPage.goToShoppingCart();

    const shoppingCartPage: ShoppingCartPage = new ShoppingCartPage();
    await shoppingCartPage.goToCheckout();

    const checkoutPage: CheckoutPage = new CheckoutPage();
    await checkoutPage.goToSummary(firstName, lastName, zipCode);

    const summaryPage: SummaryPage = new SummaryPage();
    await summaryPage.goToCheckoutComplete();
  });
  it('then should be bought a t-shirt', async () => {
    const checkoutCompletePage: CheckoutCompletePage = new CheckoutCompletePage();
    expect(await checkoutCompletePage.getFinalMessage()).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  });
});
