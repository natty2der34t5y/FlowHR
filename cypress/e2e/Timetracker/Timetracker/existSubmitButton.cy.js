//done

describe('existSubmitButton', () => {
    it('passes', () => {
      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
        .click()
        .contains('Arroyo Consulting (AC)')
        .click()

      cy.get('.ant-card-body')
        .contains('Timetracker')
        .click()

      cy.get('button')
        .contains('Submit')
        .should('exist')  
      
    })
  })