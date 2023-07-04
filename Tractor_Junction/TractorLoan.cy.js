
describe('Tractor Loan Lead Testing', () => {
  it('passes', () => {
    cy.visit('https://www.tractorjunction.com/tractor-loan/')
    cy.get('h1').contains('Apply for New Tractor Loan',{log:true})
    cy.wait(2000)
    cy.get(':nth-child(2) > .input-group > .form-control').type('Sudharson')
    cy.get(':nth-child(3) > .input-group > .form-control').type('9750805241')
    cy.get(':nth-child(4) > .form-group > .loc-edit').click().type('ker')
    cy.get('#locations > :nth-child(1) > a').click({force: true})
    cy.get('#SubmitLoanForm').click()
    cy.get('.thaks-form-content > h5').contains('Thank you for your interest!')
    
   })
})