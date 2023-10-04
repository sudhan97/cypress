import "cypress-if";
import data from "./missingFaq.json";

data.map((item, index1) => {
  it(`test ${index1 + 1}`, () => {
    cy.visit(item?.old_url);
    let head;
    let swich = 0;
    let count = 2;
    let obj = [];
    cy.get("#faqblock").then((res) => {
      [...new Array(res[0]?.children.length - 1)].forEach((item1, index) => {
        if (!index) {
          cy.get("#faqblock>div")
            .if()
            .then((res1) => {
              head = Number(res1[0].children[0]?.id.replace("heading", ""));
            });
        }

        cy.log(head, count, swich, "outer").then(() => {
          if (swich >= 4) {
            swich = 5 + count;
            count += 1;
            console.log("im", count);
          } else if (swich < 4) {
            swich = index;
          }

          cy.log(swich, "op").then(() => {
            if (swich < 9) {
              cy.get(`#heading${head + swich} > h3`).then((ques) => {
                cy.get(
                  `#collapse${head + swich} > .accordionBlock-body > h4`
                ).then((ans) => {
                  obj = [
                    ...obj,
                    {
                      question: ques[0]?.innerText,
                      answer: ans[0]?.innerText,
                    },
                    {
                      sample: "",
                    },
                  ];
                });
              });
            }
          });
        });
      });
      cy.log(obj, "outer").then(() => {
        let res = {
          id: item?.id,
          faqs: [...obj],
        };
        cy.writeFile("missingFaq.json", res, { flag: "a+" });
      });
    });
  });
});
