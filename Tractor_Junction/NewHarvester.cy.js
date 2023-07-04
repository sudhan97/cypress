

describe('New Harvester Lead Form', () => {
  it('passes', () => {
    cy.visit('https://www.tractorjunction.com/harvester/17/kartar-4000-combine-harvester/')
    cy.get('.mt-3 > .row > :nth-child(1) > .form-submit-btn').click()
    cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-header > #ModalTitle').contains('Kartar 4000')
    cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > :nth-child(8)').as('parentClass')
    cy.wait(2000)
    cy.get('@parentClass').find(':nth-child(1) > .form-control').type('Sudharson')
    cy.get('@parentClass').find(':nth-child(2) > .form-control').type('8077356362')
    cy.get('@parentClass').find(':nth-child(3) > #statesid').select(1)
    cy.get('@parentClass').find(':nth-child(4) > .custom-select').select(1)
    cy.get('@parentClass').find(':nth-child(5) > .custom-select').select(1)
    cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > form > .fillBtn').click()
    // cy.get('[data-notify="message"]').contains('Thank you for submitting your request. Our executive will contact you as soon as possible' || 'You Have already submitted Enquiry for this')
    cy.get('[data-notify="message"]').then((ele)=>{
    if(ele[0].innerText==="You Have already submitted Enquiry for this tractor! Our executive will contact you as soon as possible" || ele[0].innerText==='Thank you for submitting your request. Our executive will contact you as soon as possible'){
      console.log('true')
    }
    })
    // .contains('You Have already submitted Enquiry for this tractor! Our executive will contact you as soon as possible')
    
    //---------------------- Redirect url  check ------------------------------//
    cy.get('.mt-3 > .row > :nth-child(2) > .form-submit-btn').click()
    cy.url().should('eq', 'https://www.tractorjunction.com/tractor-loan/') // => true
  })
})