describe('productToCard', () => {
    it('checking the addition of product to the cart', () => {
    
    // open website
    cy.visit("https://www.demoblaze.com/");
    // go to product page
    cy.contains('a.hrefch', 'Samsung galaxy s6').click();
    // click on add to cart
    cy.location("href").should("eq", "https://www.demoblaze.com/prod.html?idp_=1");
    // The product has been added to the cart and click "ok"
    cy.contains('a[onclick="addToCart(1)"]', 'Add to cart').click();
  });
});