describe('editReason', () => {

    it('passes', () => {
  
      cy.login('sofis@gmail.com','SofiA1234!')

      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()

      cy.get('[aria-label="form"]').eq(1).click()

      cy.wait(2000)
      
      cy.get('.ant-select-selection-item').eq(2).click()

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

      cy.get('#editAbsence_reasonId')
      .should("have.attr","aria-required","true")
    })
  
  })