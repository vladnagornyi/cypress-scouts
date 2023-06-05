describe('orderingProduct', () => {
    it('checking ordering the product', () => {
    
    // open website
    cy.visit("https://www.demoblaze.com/");
    // go to product page
    cy.contains('a.hrefch', 'Samsung galaxy s6').click();
    // click on add to cart
    cy.location("href").should("eq", "https://www.demoblaze.com/prod.html?idp_=1");
    // The product has been added to the cart and click "ok"
    cy.wait(100);
    cy.contains('a[onclick="addToCart(1)"]', 'Add to cart').click();
    // click cart button
    cy.contains('a.nav-link#cartur', 'Cart').click();
    // click place order button
    cy.contains('button[data-target="#orderModal"]', 'Place Order').click();
    cy.wait(100);
    // filling and checking the order fields 
    cy.get('#name').click().type('name');
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
    cy.contains('button[onclick="purchaseOrder()"]', 'Purchase').click();
    // сheck for success message
    cy.contains('h2', 'Thank you for your purchase!').should('be.visible');
    cy.wait(1000);
    cy.contains('button.confirm', 'OK').click();
    // check homepage opening
    cy.url().should('eq', 'https://www.demoblaze.com/index.html');
  });
});