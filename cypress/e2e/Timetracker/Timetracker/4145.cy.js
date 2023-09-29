describe('2190', () => {
    it('passes', () => {
      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
        .click()
        .contains('Arroyo Consulting (AC)')
        .click()

      cy.get('.ant-card-body')
        .contains('Timetracker')
        .click()

      cy.get('.ant-picker-input').eq(2).click() //Monday click

      cy.get('.ant-picker-time-panel-cell-inner').contains('08').click()

      cy.get('[class="ant-btn ant-btn-primary ant-btn-sm"]').click()

      cy.get('button')
        .contains('Save')
        .should('exist')  
     
        cy.get('button')
        .contains('Save').click()  
      
    })
  })