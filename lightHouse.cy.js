import urls from './Traffic_urls/urls.json'

describe("Testing Lighthouse scores",()=>{
  urls.map((item,index)=>{
    it(`Test ${index+1}- URL:-${item.url}`, function () {

      cy.visit(item.url)
      cy.lighthouse({
        performance: 85,
        accessibility: 100,
        "best-practices": 85,
        seo: 85,
        pwa: 100,
      });
    });
  })
})
