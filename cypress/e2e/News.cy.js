import "cypress-if";
import data from "../nullheading.json";
import data1 from "./emptyAbout.json";
data1.slice(0, 1).map((item) => {
  it(`test`, () => {
    const url =
      "https://old-bikes.tractorjunction.com/en/news/royal-enfield-august-2023-sales-report-shows-a-1066-yoy-growth";
    cy.request(url, {
      failOnStatusCode: false,
    }).then((res) => {
      cy.visit(url);
      cy.get("h1").then((res) => console.log(res[0].innerHTML));
      cy.get(".news-details-content").then((res) =>
        console.log(res[0].innerHTML)
      );
    });
  });
});
