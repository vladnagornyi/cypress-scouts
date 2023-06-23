// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addProductToCart', (product) => {
    // go to product page
    cy.contains('.hrefch', product).click()
    // click on add to cart
    cy.get('#tbodyid a.btn-success').click();
});

Cypress.Commands.add('orderfields', () => {
    // filling and checking the order fields
    cy.get('#name').invoke('val', 'name');
    cy.get('#country').invoke('val', 'USA');
    cy.get('#city').invoke('val', 'New York');
    cy.get('#card').invoke('val', '11111111');
    cy.get('#month').invoke('val', '01');
    cy.get('#year').invoke('val', '2023');
});