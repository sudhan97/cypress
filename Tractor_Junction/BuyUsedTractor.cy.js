// sold button functionality is missing...
describe("buy used tractor lead form",()=>{
  it("testing",()=>{
    cy.visit("https://www.tractorjunction.com/used-tractor/mahindra/575-di-xp-plus-110585/126561/")
    cy.get('.fs-15').contains("ARE YOU INTERESTED IN THIS TRACTOR?")
    cy.wait(2000)
    cy.get('#name').type("sudharson")
    cy.get(':nth-child(6) > #buyermobile').type('9750805241')
    cy.get('#inputState').select(1)
    cy.get('#inputdistric').select(1)
    cy.get('#price').type(5000)
    //-----------------------------Loan Offers------------------------------//
    cy.get('.row > :nth-child(2) > .form-submit-btn').click()
    cy.get('#Loan-popup-used > .modal-dialog > .modal-content > .customModal-header > #LoanTitle').contains('Mahindra 575 DI XP Plus')
    cy.wait(2000)
    cy.get('#Loan-popup-used > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .row > :nth-child(1) > .form-control').type('Sudharson')
    cy.get('#Loan-popup-used > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .row > :nth-child(2) > .form-control').type('9750805241')
    cy.get(':nth-child(3) > #tractorYear').select(2)
    cy.get('#Loan-popup-used > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .row > .col-12 > .sell-view-inner > .form-group > .loc-edit > span').click().type('mum')
    cy.get('#locations > :nth-child(2) > a').click({force:true})
    cy.get('#Loan-popup-used > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .new_tractor_loan_btn').click({force:true})
    cy.get('[data-notify="message"]').contains('Your Request is submitted successfully.')


  })
  it("Validation Check",()=>{
    cy.visit("https://www.tractorjunction.com/used-tractor/mahindra/575-di-xp-plus-110585/126561/")
    cy.get('.row > :nth-child(2) > .form-submit-btn').click()
    cy.get('#Loan-popup-used > .modal-dialog > .modal-content > .customModal-body > #loan-validation > .new_tractor_loan_btn').click()
    cy.get('#name-error').contains('Please enter your name')
    cy.get('#mobile-error').contains('Please Enter Mobile Number')
    cy.get('#tractorYear-error').contains('Please Select Make year')
    cy.get('#locationPlaceholder-error').contains('Please Select your location')

  })
})