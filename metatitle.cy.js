import data from '../metadata/data.json'
describe('Testing page titles in meta tags', () => {
  it("should succesfully load each url in the sitemap", () => {
    data.forEach((url) => {
      cy.request({
        url: url.url,
        failOnStatusCode:false
      })
        .then((resp) => {
          if(resp.status===200){
            cy.visit(url.url)
            cy.title().should('eq',url.title)
          }
        })
    });
  });
})

// cy.title().should('eq',element.title)