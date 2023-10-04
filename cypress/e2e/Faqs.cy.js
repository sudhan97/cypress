import "cypress-if";
import data from "../../nullFaq.json";

data.map((item) => {
  it(`test`, () => {
    const url = item?.url;
    cy.request(url, {
      failOnStatusCode: false,
    }).then((res) => {
      if (res.status === 200) {
        cy.visit(url);
        cy.get("#faqblock")
          .if()
          .then((res) => {
            let faqNos = res[0]?.children.length;
            cy.get("#faqblock>div")
              .if()
              .then((res) => {
                let obj = {
                  id: item?.id,
                  length: faqNos,
                  start_id: res[0].children[0]?.id,
                  url: url,
                };
                cy.writeFile("inform.json", obj, { flag: "a+" });
              });
          });
      }
    });
  });
});
