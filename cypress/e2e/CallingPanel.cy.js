import "jquery";
function generateNumbers(min, max) {
  var minm = min;
  var maxm = max;
  return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}
function randomNumber(limit) {
  return Math.floor(Math.random() * limit + 1);
}
describe("Calling Panel", () => {
  new Array(10).fill("-").forEach((item, index) => {
    it(`lead ${index + 1}`, () => {
      cy.session(
        "laravel",
        () => {
          cy.visit("https://devcrms.tractorfirst.com/login");
          cy.get(":nth-child(2) > .form-control").type("sweta@tj.com");
          cy.get(":nth-child(3) > .form-control").type("pass@123");
          cy.get(".btn").click();
          cy.wait(2000);
        },
        { cacheAcrossSpecs: true }
      );
      cy.visit("https://devcrms.tractorfirst.com/crms/calling-panel");
      cy.wait(1000);

      cy.get(".caller_id").then(() => {
        cy.get(".caller_id").invoke("removeAttr", "href").click();
      });
      cy.on("window:confirm", () => false);
      cy.get(
        ":nth-child(1) > .card_inner > .card-body > :nth-child(2) > :nth-child(1) > .form-control"
      ).select(randomNumber(28), { force: true });
      cy.wait(2000);
      cy.get("#dissssst").then((list) => {
        if (list[0].length === 1) {
          cy.get("#dissssst").select(0);
        } else {
          cy.get("#dissssst").select(randomNumber(list[0].length - 1));
        }
      });
      cy.get("#pincode").clear();
      cy.get("#pincode").type(generateNumbers(100000, 999999));
      cy.get("#brand_truck").select(randomNumber(86));
      cy.wait(2000);
      cy.get("#truck_product_list").then((list) => {
        if (list[0].length === 1) {
          cy.get("#truck_product_list").select(0);
        } else {
          cy.get("#truck_product_list").select(
            randomNumber(list[0].length - 1),
            {
              force: true,
            }
          );
        }
      });
      cy.get(
        ":nth-child(4) > .card_inner > .card-body > :nth-child(2) > :nth-child(1) > .form-control"
      ).type(generateNumbers(10000, 50000));
      cy.get("#calling-lead-status").then(() => {
        const num = randomNumber(14);
        cy.get("#calling-lead-status").select(num);
        if (num === 4) {
          cy.get("#calendar").click();
          cy.get(":nth-child(4) > :nth-child(5)");
        }
      });
      cy.get(".col-12 > .form-control").type(`test ${index + 1}`, {
        force: true,
      });
      cy.get("#submit_button").then(() => {
        cy.get("#submit_button").click({ force: true });
        // if (cy.get("#name_error")) {
        //   cy.get("#name_field").clear();
        //   cy.get("#name_field").type(`Demo ${index + 1}`);
        //   cy.get("#submit_button").click({ force: true });
        // } else {
        cy.get("#flash_messages > .alert-success").contains(
          "Call History updated successfully"
        );
        // }
      });
    });
  });
});
