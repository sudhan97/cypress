import "cypress-if";
import data from "./img.json";

data.map((item) => {
  let obj = [];
  let count;
  it(`test`, () => {
    cy.visit(item?.old_url);
    cy.get(".slick-track").then((res) => (count = res[0]?.childElementCount));
    cy.log(count, "in").then(() => {
      new Array(count).fill(",").map((i, index) => {
        cy.get(`[data-slick-index="${index}"]>.bike-bder-1>.img-contain`).then(
          (res) => {
            obj.push(res[0].currentSrc);
          }
        );
      });
    });

    cy.log(obj, "outer").then(() => {
      cy.writeFile(
        "gettingImages.json",
        { ...item, images: [...obj] },
        { flag: "a+" }
      );
    });
  });
});
