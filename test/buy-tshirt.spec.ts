import { browser } from 'protractor';
import {
  SignInPage, InventoryPage, ShoppingCartPage, SummaryPage, CheckoutPage, CheckoutCompletePage
} from '../src/page';

const baseUrl = 'https://www.saucedemo.com/';

describe('Buy a t-shirt', () => {
  beforeEach(async () => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 120000;

    await browser.get(baseUrl);

    const signInPage: SignInPage = new SignInPage();
    await signInPage.logIn('standard_user', 'secret_sauce');

    const inventoryPage: InventoryPage = new InventoryPage();
    await inventoryPage.goToShoppingCart();

    const shoppingCartPage: ShoppingCartPage = new ShoppingCartPage();
    await shoppingCartPage.goToCheckout();

    const checkoutPage: CheckoutPage = new CheckoutPage();
    await checkoutPage.goToSummary('Dennys', 'Mosquera', '720016');

    const summaryPage: SummaryPage = new SummaryPage();
    await summaryPage.goToCheckoutComplete();
  });
  it('then should be bought a t-shirt', async () => {
    const checkoutCompletePage: CheckoutCompletePage = new CheckoutCompletePage();
    expect(await checkoutCompletePage.getFinalMessage()).toBe('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
  });
});
