import 'cypress-file-upload'

describe('4182', () => {

    it('passes', () => {
  
      cy.login('sofis@gmail.com','SofiA1234!') //Cypress Command for Login
  
      cy.wait(1000) //Cypress wait of 1 second after Login

      cy.get('.ant-select-selector').
      click() //Click on Select Company Dropdown

      cy.contains('Arroyo Consulting (AC)').click() //Click on Arroyo Consulting option

      cy.get('a[href="/timetracker"]').click() //Click on Time tracker module

      cy.get('a[href="/timetracker/timeOff"]').click() //Click on TIme Off section

      cy.get('button:contains(Add)').
      should('be.enabled').
      click() //Click to add time off

      cy.wait(1000) //Cypress wait of 1 second after clicking to add a time off

      cy.get('#addPerson_reasonId').click()

      cy.get('.ant-select-dropdown')
      .contains('License').click()

      //cy.get('#addPerson_reasonId').click()

      //cy.get('#addPerson_reasonId').type('{backspace}')
      
      cy.wait(3000)

      //cy.get('#addPerson').click()
      //cy.get('#addPerson_reasonId').clear()
      
      cy.get('input[type="file"]').attachFile('test.png')
      //cy.get('#addPerson_reasonId').blur()
      cy.get('#addPerson_startDate')
      .click()
   
      cy.get('.ant-picker-cell-today')
      .click()
  
      cy.get('#addPerson_endDate').click()

      cy.get('.ant-picker-cell-today').eq(1).click()
  
      

      cy.get('#comment').type('This is a test comment 10 01 10101')
  
      cy.wait(3000)
  
      cy.get('button:contains(Send)').should('be.enabled')

      cy.get('button:contains(Save)').should('be.disabled')
      
    })
  
  })