
describe('Buy Used Tractor Implement Lead Form', () => {
  it('Testing lead form', () => {
    cy.visit('https://www.tractorjunction.com/used-implement/mourya/2013/5917/')
    cy.get('.fs-15').contains('Interested In Implement')
    cy.wait(2000)
    cy.get('#name').type('Sudharson')
    cy.get('#email').type('9750805241')
    cy.get('#inputState').select(1)
    cy.get('#inputdistric').select(1)
    cy.get('#price').type('50000')
    cy.get(':nth-child(1) > .form-submit-btn').click()
    cy.get('#contactSellerInfo > .modal-dialog > .modal-content > .customModal-header > :nth-child(2)')
      .contains('Thank you for contacting Tractor Junction! You can buy old implement by manually contacting the seller. Seller details are provided below.')
      cy.get('#contactSellerInfo > .modal-dialog > .modal-content > .close > .filter-img').click({force: true})
      //--------------Get Loan Button Checking---------------------//
    cy.get('.row > :nth-child(2) > .form-submit-btn').invoke('removeAttr', 'target').click()
    
    cy.url().should('eq','https://www.tractorjunction.com/tractor-loan/')

})
})