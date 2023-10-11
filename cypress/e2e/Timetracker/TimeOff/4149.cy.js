describe('4149', () => {

    it('passes', () => {

      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.wait(1000)

      cy.get('.ant-select-selector').
      click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()

      cy.wait(2000)

      cy.get('h2').
      contains('List of time off').
      should('exist')
      
      cy.get('h2').
      contains('Sofi Arroyo').
      should('exist')

      cy.get('a[rel="nofollow"]').
      last().
      click()

      cy.wait(1000)

      cy.get('button[class="ant-pagination-item-link"]').
      eq(1).
      should('be.disabled')
  
    })
  
  })