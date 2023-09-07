// done


describe('Login', () => {
  it('passes', () => {

    cy.visit('/')

    cy.get('button')
      .contains('Accept')
      .click()

    cy.get('input[placeholder="Email"]')
      .type('sofis@gmail.com')

    cy.get('input[placeholder="Password"]')
      .type('SofiA1234!')

    cy.get('button')
      .contains('LOGIN')
      .click()

    cy.logout()
  })
})