describe('orderingProduct', () => {
    it('checking ordering the product', () => {
    
    // open website
    cy.visit("https://www.demoblaze.com/");
    // go to product page
    cy.contains('a.hrefch', 'Samsung galaxy s6').click();
    // click on add to cart
    cy.location("href").should("eq", "https://www.demoblaze.com/prod.html?idp_=1");
    // The product has been added to the cart and click "ok"
    cy.contains('a[onclick="addToCart(1)"]', 'Add to cart').click();
    // click cart button
    cy.contains('a.nav-link#cartur', 'Cart').click();
    // click place order button
    cy.contains('button[data-target="#orderModal"]', 'Place Order').click();
    // filling in the order fields 
    cy.get('#name').click().type('name');
    cy.get('#country').click().type('USA');
    cy.get('#city').click().type('New York');
    cy.get('#card').click().type('11111111');
    cy.get('#month').click().type('01');
    cy.get('#year').click().type('2001');
    // // click Purchase button
    cy.contains('button[onclick="purchaseOrder()"]', 'Purchase').click();
    cy.contains('button.confirm', 'OK').click();
  });
});