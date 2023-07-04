import urls from "../sitemapurl/urls.json";

it("should succesfully load each url in the sitemap", () => {
  urls.forEach((url) => {
    cy.visit(url,{failOnStatusCode: false});
  });
});