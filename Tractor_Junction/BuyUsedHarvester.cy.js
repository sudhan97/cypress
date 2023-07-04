
describe('Buy Used Tractor Implement Lead Form', () => {
  it('Testing lead form', () => {
    cy.visit('https://www.tractorjunction.com/used-harvester/john-deere/green-gold/5972/')
    cy.get('.fs-15').contains('Interested In Harvester')
    cy.wait(2000)
    cy.get('#name').type('Sudharson')
    cy.get('#email').type('9750805241')
    cy.get('#inputState').select(1)
    cy.get('#inputdistric').select(1)
    cy.get('#price').type('50000')
    cy.get(':nth-child(1) > .form-submit-btn').click()
    cy.get('#contactSellerInfo > .modal-dialog > .modal-content > .customModal-header > :nth-child(2)')
      .contains('Thank you for contacting Tractor Junction! You can buy old harvester by manually contacting the seller. Seller details are provided below.')
      cy.get('#contactSellerInfo > .modal-dialog > .modal-content > .close > .filter-img').click()
      //--------------Get Loan Button Checking---------------------//
      cy.get('.row > :nth-child(2) > .form-submit-btn').invoke('removeAttr', 'target').click()
      cy.url().should('eq','https://www.tractorjunction.com/tractor-loan/')
    })

   //-------------Test will throw error sometimes..try to rerun it again--------------//
    it('Validation Check',()=>{
      cy.visit('https://www.tractorjunction.com/used-harvester/john-deere/green-gold/5972/')
      cy.get(':nth-child(1) > .form-submit-btn').click()
      cy.wait(4000)
      cy.get('#name').should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('#email').should('have.css','border-color','rgb(220, 53, 69)')
      cy.get('#inputState').should('have.css','border-color','rgb(220, 53, 69)')
    cy.get('#inputdistric').should('have.css','border-color','rgb(220, 53, 69)')
    })
})