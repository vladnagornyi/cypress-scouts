Cypress._.times(10, () => {
  describe('orderingProduct', () => {
    beforeEach(() => {
      cy.intercept("POST", "/bycat").as("category");
      cy.intercept('POST', '/addtocart').as('addtocart');
      cy.intercept('POST', '/viewcart').as("viewcart");
      // open website
      cy.visit('/');
    });

    it('checking ordering phone', () => {
      cy.contains('.list-group-item', 'Phones').click();
      cy.wait('@category');
      
      cy.addProductToCart('Samsung galaxy s6');
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
      cy.contains('.list-group-item', 'Phones').click();
      cy.wait('@category');
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
