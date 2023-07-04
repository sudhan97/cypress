import urls from './urls.json';


describe('Testing page titles in meta tags', () => {
 
  
    
      urls.forEach((item,index) => {
        it(`Test ${index+1}`, () => {
          cy.request({
            url: item.url,
            failOnStatusCode:false
          })
            .then((resp) => {
             
              if(resp.status===200){
                cy.visit(item.url)
                cy.title().should('eq',item.title)
    //             cy.get('head meta[property="og:title"]')
    // .should("have.attr", "content",item.title);
              }
            })
        
    });
  })

})