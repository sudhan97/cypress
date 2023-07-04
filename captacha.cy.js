// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://www.tractorjunction.com/tractor-dealership-enquiry/')
//     cy.get('#validationDefault01').type('sweta saha')
//     cy.get('#validationDefault03').type('9937470977')
//     cy.get('#state').select(2)
//     cy.get('#district').select(2)
//     cy.get('#brand').select(2)
//     cy.get('[style="width: 304px; height: 78px;"] > div > iframe').then((ele)=>{
//      cy.get(`${ele[0]}`)
     
//     })
//     cy.get('.form-view-inner > .form-submit-btn').click()
//   })
// })
describe('shdjhs',()=>{

    it('solveGoogleReCAPTCHA', () => {
      // Wait until the iframe (Google reCAPTCHA) is totally loaded
      cy.visit('https://www.tractorjunction.com/tractor-dealership-enquiry/')
      cy.wait(500);
      cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
        .then((ele) => {
          const $body =ele.getElementsById('hi').
          cy.wrap($body)
            .find('.recaptcha-checkbox-border')
            .should('be.visible')
            .click();
        });
  
  })
 
})
