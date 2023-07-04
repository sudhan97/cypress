describe("New tractor from check",()=>{
  it("testing the form",()=>{
      cy.visit('https://www.tractorjunction.com/mahindra-tractor/575-di-xp-plus/')
      cy.get('.d-none > .row > :nth-child(1) > .tractor_initiate').as('OnRoadPriceBtn')
      cy.get('@OnRoadPriceBtn').click({force:true}) //parent class of this one have display none css property so that we have to put {force:true} 
      cy.get('.modal.show > .modal-dialog > .modal-content > .close > .filter-img').click()//checking closing button in the form
      cy.get('@OnRoadPriceBtn').click({force:true})
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form >:nth-child(8) ').as('formBody')
      cy.wait(2000)
      cy.get('@formBody').find(':nth-child(1) > .form-control').type('sudharson')
       cy.get('@formBody').find(':nth-child(2) > .form-control').type('9750805241')
       cy.get('@formBody').find(':nth-child(3) > #statesid').select(1)
       cy.get('@formBody').find(':nth-child(4) > .custom-select').select(1)
       cy.get('@formBody').find(':nth-child(5) > .custom-select').select(1)
       cy.get('@formBody').find('#tent_pur > .boldfont').contains('How soon you wish to purchase this tractor ?')
      cy.get('@formBody').find('#tent_pur > .purchaseTimePeriod > .row > :nth-child(2) > .checkbox-custom > .checkmark').click()
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .text-center').contains('By clicking on Submit, you agree to our Terms and Conditions')
      cy.get('.modal.show > .modal-dialog > .modal-content > .customModal-body > #tractor_submit_form > .tractor_submit').then((elem)=>{
       cy.get(elem).click()
      })
      cy.get('#VerifyMobileNumber > .modal-dialog > .modal-content > .customModal-header > :nth-child(2)').then((ele)=>{
        if(ele[0].innerText==="You Have already submitted Enquiry for this tractor! Our executive will contact you as soon as possible" || ele[0].innerText==='Please Verify Your Mobile Number'){
          console.log('true')
        }
        })
  })
  })