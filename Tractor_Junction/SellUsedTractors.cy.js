
describe('template spec', () => {
  it('Stage 1', () => {
    cy.visit('https://www.tractorjunction.com/sell-used-tractor/')
    cy.get(':nth-child(2) > :nth-child(1) > .form-group > .loc-edit').click().type('del')
    cy.get('#locations > :nth-child(1) > a').click({force:true})  //parent class of this one have display none css property so that we have to put {force:true}
    cy.wait(2000)
    cy.get('#userName').type('sudharson')
    cy.get('#userMobile').type('9750805241')
    cy.get('.form-sell-btn2').click()
   //----- Stage 2 --------//
   cy.get('#step1 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .brd-row > .row > .mb-2 > h4').contains('Which tractor do you Own?')
    cy.get('#tractorBrand').select(2)
    cy.get('#tractorModal').select(1)
    cy.get('#tractorYear').select(1)
    cy.get('#step1 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click()
   //----- Stage 3 --------//
   cy.get('#step2 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .brd-row > .row > .mb-2 > h4').contains('Share Tractor Conditions With Buyers')
   cy.get('#tractorEnginConditions').select(2)
   cy.get('#tractorTyreConditions').select(1)
   cy.get('#tractorEngineHours').select(1)
   cy.get('#step2 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click()
   cy.get('#step3 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .brd-row > :nth-child(1) > :nth-child(1)').contains('Upload Tractor Images')
   cy.get('.attachment > #image1').selectFile('cypress/fixtures/image1.png',{force: true})
   cy.get('.attachment > #image2').selectFile('cypress/fixtures/image2.jpg',{force: true})
   cy.get('.attachment > #image3').selectFile('cypress/fixtures/image3.jpg',{force: true})
   cy.get('#loanwithin').select(1)
   //----------Checking Back button property in all stages-----////
   cy.get('#step3 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(2) > .bkp-btn').click()
   cy.get('#step2 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .brd-row > .row > .mb-2 > h4').contains('Share Tractor Conditions With Buyers')
   cy.get('#step1 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .brd-row > .row > .mb-2 > h4').contains('Which tractor do you Own?')
   cy.get('#userMobile').should('have.value','9750805241')
   cy.get('.form-sell-btn2').click({force:true})
   cy.get('#step1 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click({force:true})
   cy.get('#step3 > .step-full-wrapper > .brd-wrapper > .brd-row-wris > .newbtn-show > .list-inline > :nth-child(1) > .default-btn').click()
  //-----deal click----//
  cy.get('#dealbtn').click()
  cy.get('h3').contains('Thank You!')
  cy.get('.request-title > p').contains('Your request for your')
  cy.get('.check-box-wrp > :nth-child(4) > .checkbox-custom > .checkmark').click()
  cy.get('#SubmitRequestForm').click()
  cy.url().should('eq','https://www.tractorjunction.com/blog/tractor-maintenance-guide/')
  })
  })