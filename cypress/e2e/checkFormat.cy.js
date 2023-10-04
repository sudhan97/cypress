import data from "../../url.json";
import "cypress-if";
data.map((item1, index) => {
  const url = item1.replace(
    "https://bikes.tractorjunction.com",
    "http://localhost:3000"
  );
  it("test", () => {
    cy.visit(url);
    cy.get(".listingContent_wrp > :nth-child(1)>h1");
  });
});
