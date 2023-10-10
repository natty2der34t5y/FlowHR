describe('4177', () => {

    it('passes', () => {
  
      cy.login('sofis@gmail.com','SofiA1234!') //Cypress Command for Login
  
      cy.wait(1000) //Cypress wait of 1 second after Login

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click() //Click on Select Company Dropdown

      cy.contains('Arroyo Consulting (AC)').click() //Click on Arroyo Consulting option

      cy.get('a[href="/timetracker"]').click() //Click on Time tracker module

      cy.get('a[href="/timetracker/timeOff"]').click() //Click on TIme Off section

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"]').click() //Click to add time off

      cy.wait(1000) //Cypress wait of 1 second after clicking to add a time off

      cy.get('#addPerson_reasonId').click() //Click on Reason Dropdown

      cy.get('.ant-select-dropdown')
      .contains('License').should('exist')//Cypress Assertion to check License option is available
      
      cy.get('.ant-select-dropdown')
      .contains('Medical Leave').should('exist')//Cypress Assertion to check Medical Leave option is available
      
      cy.get('.ant-select-dropdown')
      .contains('Other').should('exist')//Cypress Assertion to check Other option is available

      cy.get('.ant-select-dropdown')
      .contains('Personal Emergency').should('exist')//Cypress Assertion to check Personal Emergency option is available
      
      cy.get('.ant-select-dropdown')
      .contains('Vacation').should('exist')//Cypress Assertion to check Vacation option is available

      cy.get('.ant-select-dropdown')
      .contains('License').click()//Select License option

      cy.get('#addPerson_reasonId')
      .should("have.attr","aria-required","true") //Cypress Assertion to check Reason is a required field
      
    })
  
  })