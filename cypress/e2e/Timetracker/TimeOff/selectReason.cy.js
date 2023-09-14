describe('selectReason', () => {

    it('passes', () => {
  
      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"]').click()

      cy.wait(1000)

      cy.get('#addPerson_reasonId').click()

      cy.get('.ant-select-dropdown')
      .contains('License').should('exist')
      
      cy.get('.ant-select-dropdown')
      .contains('Medical Leave').should('exist')
      
      cy.get('.ant-select-dropdown')
      .contains('Other').should('exist')

      cy.get('.ant-select-dropdown')
      .contains('Personal Emergency').should('exist')
      
      cy.get('.ant-select-dropdown')
      .contains('Vacation').should('exist')

      cy.get('.ant-select-dropdown')
      .contains('License').click()

      cy.get('#addPerson_reasonId')
      .should("have.attr","aria-required","true")
      
    })
  
  })