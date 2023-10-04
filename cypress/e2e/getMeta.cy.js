import data from "../../models.json";
import "cypress-if";
data.map((item1, index) => {
  it(`test ${index + 1}`, () => {
    cy.request(item1.attributes.view_here, {
      failOnStatusCode: false,
    }).then(() => {
      var obj = [];
      cy.visit(item1.attributes.view_here);
      cy.title().then((item) => {
        obj = { ...obj, id: item1.id, title: item };
        cy.get("head meta[name=description]")
          .if()
          .then((item) => {
            obj = { ...obj, description: item[0].content };
          });

        cy.get("head meta[name=robots]")
          .if()
          .then((item) => {
            obj = { ...obj, robots: item[0].content };
          });
        cy.get("head meta[name=keywords]")
          .if()
          .then((item) => {
            obj = { ...obj, keywords: item[0].content };
          });

        cy.log(obj, "outer").then(() => {
          cy.writeFile("model_seo.json", obj, { flag: "a+" });
        });
      });
    });
  });
});
