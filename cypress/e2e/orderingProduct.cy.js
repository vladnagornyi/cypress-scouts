describe('orderingProduct', () => {
    it('checking ordering the product', () => {
    
    // open website
    cy.visit("https://www.demoblaze.com/");
    // go to product page
    cy.get("#tbodyid > div:nth-of-type(1) > div > div a").click();
    // click on add to cart
    cy.location("href").should("eq", "https://www.demoblaze.com/prod.html?idp_=1");
    // The product has been added to the cart and click "ok"
    cy.get("#tbodyid a").click();
      // click cart button
    cy.get("#cartur").click();
    cy.location("href").should("eq", "https://www.demoblaze.com/cart.html");
    // click place order button
    cy.get("#page-wrapper button").click();
    // filling in the order fields 
    cy.get("#name").click();
    cy.get("#name").type("name");
    cy.get("#country").click();
    cy.get("#country").type("USA");
    cy.get("#city").click();
    cy.get("#city").type("New York");
    cy.get("#card").click();
    cy.get("#card").type("11111111");
    cy.get("#month").click();
    cy.get("#month").type("01");
    cy.get("#year").click();
    cy.get("#year").type("2001");
    // // click Purchase button
    cy.get("#orderModal button.btn-primary").click();
    cy.get("div.sa-button-container > div > button").click();
  });
});