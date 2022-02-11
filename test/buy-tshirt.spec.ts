import { browser } from 'protractor';
import {
  SignInPage, InventoryPage, ShoppingCartPage, SummaryPage, CheckoutPage, CheckoutCompletePage
} from '../src/page';

const baseUrl = 'https://www.saucedemo.com/';

describe('Buy a t-shirt', () => {
  beforeAll(async () => {
    await browser.get(baseUrl);
  });

  describe('Log in into the application.', () => {
    beforeAll(async () => {
      const signInPage: SignInPage = new SignInPage();
      await signInPage.logIn('standard_user', 'secret_sauce');
    });
    describe('Add t-shirt to shopping cart.', () => {
      beforeAll(async () => {
        const inventoryPage: InventoryPage = new InventoryPage();
        await inventoryPage.goToShoppingCart();
      });
      describe('Go to checkout.', () => {
        beforeAll(async () => {
          const shoppingCartPage: ShoppingCartPage = new ShoppingCartPage();
          await shoppingCartPage.goToCheckout();
        });
        describe('Fill in the buyer information.', () => {
          beforeAll(async () => {
            const checkoutPage: CheckoutPage = new CheckoutPage();
            await checkoutPage.goToSummary('Dennys', 'Mosquera', '720016');
          });
          describe('Go to checkout complete.', () => {
            beforeAll(async () => {
              const summaryPage: SummaryPage = new SummaryPage();
              await summaryPage.goToCheckoutComplete();
            });
            it('then should be bought a t-shirt', async () => {
              const checkoutCompletePage: CheckoutCompletePage = new CheckoutCompletePage();
              expect(await checkoutCompletePage.getFinalMessage()).toContain('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
            });
          });
        });
      });
    });
  });
});
