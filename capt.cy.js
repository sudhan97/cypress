

describe('template spec', () => {
 
  it('passes', () => {
    cy.visit('https://vahan.parivahan.gov.in/vahan/vahan/ui/login/login.xhtml')
    cy.screenshot({ clip: { width: 130, height: 50, x: 770, y:580 },overwrite:true} )
    cy.task('clean')
    cy.task('textfromimage').then(res=>console.log(res))
  })
  


})

