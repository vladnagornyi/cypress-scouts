Cypress._.times(2, () => {
  describe('orderingProduct', () => {
    beforeEach(() => {
      // open website
      cy.visit('/');
    });

    it('checking ordering phone', () => {
      // go to product page
      cy.contains('.card-title', 'Samsung galaxy s6').click();
      // click on add to cart
      cy.contains('.btn', 'Add to cart').should('be.visible', { timeout: 5000 }).click();
      // click cart button
      cy.contains('a.nav-link#cartur', 'Cart').click();
      // click place order button
      cy.contains('.btn', 'Place Order').click();
      // filling and checking the order fields
      cy.get('#name').click().type('name');
      cy.wait(1000);
      cy.get('#name').should('have.value', 'name');
      cy.get('#country').click().type('USA');
      cy.get('#country').should('have.value', 'USA');
      cy.get('#city').click().type('New York');
      cy.get('#city').should('have.value', 'New York');
      cy.get('#card').click().type('11111111');
      cy.get('#card').should('have.value', '11111111');
      cy.get('#month').click().type('01');
      cy.get('#month').should('have.value', '01');
      cy.get('#year').click().type('2001');
      cy.get('#year').should('have.value', '2001');
      // click Purchase button
      cy.contains('.btn', 'Purchase').click();;
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
      cy.contains('.btn', 'Add to cart').should('be.visible', { timeout: 5000 }).click();
      // click cart button
      cy.contains('a.nav-link#cartur', 'Cart').click();
      // click place order button
      cy.contains('.btn', 'Place Order').click();
      // filling and checking the order fields
      cy.get('#name').click().type('name');
      cy.wait(1000);
      cy.get('#name').should('have.value', 'name');
      cy.get('#country').click().type('USA');
      cy.get('#country').should('have.value', 'USA');
      cy.get('#city').click().type('New York');
      cy.get('#city').should('have.value', 'New York');
      cy.get('#card').click().type('11111111');
      cy.get('#card').should('have.value', '11111111');
      cy.get('#month').click().type('01');
      cy.get('#month').should('have.value', '01');
      cy.get('#year').click().type('2001');
      cy.get('#year').should('have.value', '2001');
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
