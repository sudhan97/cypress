import data from "../../done.json";
import "cypress-if";

data.map((item, index) => {
  it("test", () => {
    cy.visit(`${item?.url}/specifications`);
    cy.get("#collapseSummary").then((res) => {
      let obj = {
        ...item,
        specUrl: `${item?.url}/specifications`,
        specsContent: res[0]?.innerHTML,
      };

      cy.writeFile("22.json", obj, { flag: "a+" });
    });
  });
});
