import "cypress-if";
import data from "../nullheading.json";
import data1 from "./emptyAbout.json";
data1.map((item) => {
  it(`test`, () => {
    const url = item?.url;
    cy.request(url, {
      failOnStatusCode: false,
    }).then((res) => {
      let obj;
      cy.visit(url);
      // cy.get(".col-lg-9 > .sectionHeading > h2")
      //   .if()
      //   .then((res) => {
      //     obj = { ...obj, id: item.id, heading: res[0]?.outerText };
      //   });

      cy.get(":nth-child(8) > .col-12 > .sectionHeading")
        .if()
        .then((res) => {
          obj = {
            id: item?.id,
            about_heading: res[0]?.outerText,
          };
          cy.get(".col-12 > #summary > #collapseSummary > :nth-child(2)")
            .if()
            .then((res) => {
              obj = {
                ...obj,
                AboutContent: res[0]?.outerText,
              };
              cy.writeFile("Fill.json", obj, { flag: "a+" });
            });
        });
    });
  });
});
