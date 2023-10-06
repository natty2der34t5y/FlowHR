describe('4146', () => {

    it('passes', () => {

      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()
      
      cy.saveTimeOffToday()

      cy.get('h2').
      contains('List of time off').
      should('exist')
      
      cy.get('h2').
      contains('Sofi Arroyo').
      should('exist')

      cy.get('div').
      contains('Sent').
      should('exist')

      cy.get('.anticon-search').
      should("have.attr","aria-label","search"). //search click
      click()

      cy.get('input').
      eq(3).
      should("have.attr","placeholder","Search Reason").
      type('License')

      cy.get('span').
      contains('Search'). //click search button
      click()

      cy.get('td').
      contains('License').
      should('exist')

      cy.cancelTimeOffToday()
      
      //

    })
  
  })