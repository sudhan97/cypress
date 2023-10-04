import data from "./404routes.json";
import "cypress-if";

data.map((item) => {
  it("test", () => {
    cy.request({
      url: `https://bikes.tractorjunction.com/en/${item?.attributes?.preview}`,
      failOnStatusCode: false,
    })
      .its("status")
      .should("equal", 404);
  });
});
