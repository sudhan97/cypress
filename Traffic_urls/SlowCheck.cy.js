import urls from './urls.js';

it("Slow Checking traffic urls", () => {
  urls.forEach((url) => {
    cy.visit(url.url,{failOnStatusCode: false});
  });
});

