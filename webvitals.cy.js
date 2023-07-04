import urls from './Traffic_urls/urls.json'
import "cypress-web-vitals";

describe("Web Vital Scores For Traffic Urls",()=>{

  // urls.map((item,index)=>{
    
    it(`Test ${index+1}- URL:-${item.url}`, function () {
      cy.visit(item.url)
      cy.vitals();
      
    });
  })
// })