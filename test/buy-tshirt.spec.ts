import { browser } from 'protractor';
import {
  SignInPage, InventoryPage, ShoppingCartPage, SummaryPage, CheckoutPage, CheckoutCompletePage
} from '../src/page';

const baseUrl = 'https://www.saucedemo.com/';

describe('Buy a t-shirt', () => {
  const signInPage: SignInPage = new SignInPage();
  const inventoryPage: InventoryPage = new InventoryPage();
  const shoppingCartPage: ShoppingCartPage = new ShoppingCartPage();
  const checkoutPage: CheckoutPage = new CheckoutPage();
  const summaryPage: SummaryPage = new SummaryPage();

  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;
    await browser.get(baseUrl);

    await signInPage.logIn('standard_user', 'secret_sauce');
    await inventoryPage.goToShoppingCart();
    await shoppingCartPage.goToCheckout();
    await checkoutPage.goToSummary('Dennys', 'Mosquera', '720016');
    await summaryPage.goToCheckoutComplete();
  });
  it('then should be bought a t-shirt', async () => {
    const checkoutCompletePage: CheckoutCompletePage = new CheckoutCompletePage();
    expect(await checkoutCompletePage.getFinalMessage()).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  });
});
