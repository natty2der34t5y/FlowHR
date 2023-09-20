describe('reviewTimeOffProjects', () => {

    it('passes', () => {

      cy.login('leaderautomation_jp@yopmail.com','Auto1989$')
  
      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/reviewTimeOff"]').click()

      cy.get('[class="ant-select sc-eirqVv ozpNv ant-select-single ant-select-show-arrow"]').eq(0).click()
      
      cy.wait(2000)

      cy.get('.ant-select-selection-item').eq(2).click()

      cy.get('.ant-select-item-option')
      .contains('All projects').should('exist')
      
      cy.get('.ant-select-item-option')
      .contains('Leader Automation Project JP').should('exist')

    })
  
  })