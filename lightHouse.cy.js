import urls from "./rr.json";

describe("Testing Lighthouse scores", () => {
  urls.map((item, index) => {
    it(`Test ${index + 1}- URL:-${item}`, function () {
      cy.visit(item);
      cy.lighthouse({
        performance: 85,
        accessibility: 100,
        "best-practices": 85,
        seo: 85,
        pwa: 100,
      });
    });
  });
});
