
Cypress.Commands.add('login', (username, password) => {
    cy.visit('/')

    cy.wait(2000)

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

Cypress.Commands.add('saveTimeOffToday', () => {

  cy.get('button:contains(Add)').
  should('be.enabled').
  click()

  cy.wait(1000)

  cy.get('#addPerson_reasonId').click()

  cy.get('.ant-select-dropdown')
  .contains('License').click()
  
  cy.get('#addPerson_startDate')
  .click()
   
  cy.get('.ant-picker-cell-today')
  .click()
  
  cy.get('#addPerson_endDate').click()

  cy.get('.ant-picker-cell-today').eq(1).click()
  
  cy.get('input[type="file"]').attachFile('test.png')

  cy.get('#comment').type('This is a test comment 10 01 10101')
  
  cy.wait(3000)
  
  cy.get('button:contains(Send)').
  should('be.enabled').
  click()

  cy.get('button:contains(Save)').
  should('be.enabled').
  click()

  cy.wait(2000)
})

Cypress.Commands.add('cancelTimeOffToday', () => {
  
      cy.get('.anticon-close-circle').
      eq(0).
      click()

      cy.get('span').
      contains('Confirm').
      click()

})