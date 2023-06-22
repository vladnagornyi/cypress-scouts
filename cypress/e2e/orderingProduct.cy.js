Cypress._.times(10, () => {
  describe('orderingProduct', () => {
    beforeEach(() => {
      cy.intercept('POST', '/addtocart').as('addtocart');
      cy.intercept('POST', '/viewcart').as("viewcart");
      // open website
      cy.visit('/');
    });

    it('checking ordering phone', () => {
      // go to product page
      cy.contains('.card-title', 'Samsung galaxy s6').click();
      // click on add to cart
      cy.contains('.btn', 'Add to cart').click();
      cy.wait('@addtocart');
      // click cart button
      cy.contains('a.nav-link#cartur', 'Cart').click();
      cy.wait('@viewcart');
      // click place order button
      cy.contains('.btn', 'Place Order').click();
      cy.orderfields();
      // click Purchase button
      cy.contains('.btn', 'Purchase').click();
      // check for success message
      cy.contains('h2', 'Thank you for your purchase!').should('be.visible');
      cy.wait(1000);
      cy.contains('button.confirm', 'OK').click();
      // check homepage opening
      cy.url().should('eq', Cypress.config().baseUrl + '/index.html');
    });

    it('checking ordering laptop', () => {
      // go to product page
      cy.contains('.card-title', 'Sony vaio i5').click();
      // The product has been added to the cart and click "ok"
      cy.contains('.btn', 'Add to cart').click();
      cy.wait('@addtocart');
      // click cart button
      cy.contains('a.nav-link#cartur', 'Cart').click();
      cy.wait('@viewcart');
      // click place order button
      cy.contains('.btn', 'Place Order').click();
      cy.orderfields();
      // click Purchase button
      cy.contains('.btn', 'Purchase').click();
      // check for success message
      cy.contains('h2', 'Thank you for your purchase!').should('be.visible');
      cy.wait(1000);
      cy.contains('button.confirm', 'OK').click();
      // check homepage opening
      cy.url().should('eq', Cypress.config().baseUrl + '/index.html');
    });
  });
});
