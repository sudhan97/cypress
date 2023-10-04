import data from "./sam.json";
import "cypress-if";

data.map((item, index) => {
  it("test", () => {
    cy.visit(item?.url);
    cy.get(
      "#bikeOverviewId > .container-mid > .row > .col-lg-12>#summary>#collapseSummary"
    ).then((res) => {
      let obj = {
        id: item?.id,
        url: item?.url,
        content: res[0]?.innerHTML,
      };

      cy.writeFile("createValidUrl.json", obj, { flag: "a+" });
    });
  });
});
