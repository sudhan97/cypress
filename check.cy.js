import urls from './Traffic_urls/urls.js'
describe("check",()=>{
 let data=[]
  describe("Slow Checking traffic urls", () => {
   
  //   cy.get('tr > td > td > :nth-child(1)')
     beforeEach(()=>{
      cy.visit('http://www.exadium.com/tools/metadata');
     })
 
    urls.forEach((url) => {
      it("jhadj",()=>{
      
        cy.get('#Form_AnalyseMetaForm_Urls').type(url.url)
         cy.get('#Form_AnalyseMetaForm_action_CreateAnalyseMeta').click()
         cy.get('tbody > :nth-child(2) > :nth-child(2)').then((res)=>{
           data.push(res.text())
           console.log(data)
         })
      })
   
    

    });
    
  });
})
