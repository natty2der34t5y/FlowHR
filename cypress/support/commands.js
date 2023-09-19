
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')

    cy.get('button')
      .contains('Accept')
      .click()

    cy.get('input[placeholder="Email"]')
      .type(username)

    cy.get('input[placeholder="Password"]')
      .type(password)

      cy.get('button')
      .contains('LOGIN')
      .click()

})

Cypress.Commands.add('logout', () => {
    cy.get('[class="ant-btn ant-btn-text ant-btn-block sc-gtsrHT lkqilK"]')
    .click()
   
})

