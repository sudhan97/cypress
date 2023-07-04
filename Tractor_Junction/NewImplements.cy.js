
describe('New Implements Form', () => {
  it('passes', () => {
    cy.visit('https://www.tractorjunction.com/implement/khedut/tractor-tipping-trailer/')
    cy.get('.mt-3 > .row > :nth-child(1) > .requestModal').click()
    cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-header > #ModalTitle').contains('Khedut Tractor Tipping Trailer')
    cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8)').as('parentClass')
    cy.wait(2000)
    cy.get('@parentClass').find(':nth-child(1) > .form-control').type('Sudharson')
    cy.get('@parentClass').find(':nth-child(2) > .form-control').type('9750805241')
    cy.get('@parentClass').find(':nth-child(3) > #statesid').select(1)
    cy.get('@parentClass').find(':nth-child(4) > .custom-select').select(1)
    cy.get('@parentClass').find(':nth-child(5) > .custom-select').select(1)
    cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click()
    cy.get('[data-notify="message"]').then((ele)=>{
      if(ele[0].innerText==="You Have already submitted Enquiry for this tractor! Our executive will contact you as soon as possible" || ele[0].innerText==='Thank you for submitting your request. Our executive will contact you as soon as possible'){
        console.log(
    'true'
        )
      }
      })
    //---------------------- Redirect url  check ------------------------------//
    cy.get('.mt-3 > .row > :nth-child(2) > .form-submit-btn').click()
    cy.url().should('eq', 'https://www.tractorjunction.com/tractor-loan/') // => true
    
  })
})