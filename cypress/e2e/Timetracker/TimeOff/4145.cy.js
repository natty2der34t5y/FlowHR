describe('addComment', () => {

    it('passes', () => {

      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()

      cy.get('h2').
      contains('List of time off').
      should('exist')

      cy.get('div').
      contains('Accepted').
      should('exist')

      cy.wait(1000)

      //cy.get('#comment').type('This is a test comment 10 10 101 01')
      
      //cy.get('#comment').should("have.attr","aria-required","true")

      //cy.get('button[ant-click-animating-without-extra-node="false"]').should('be.enabled')

    })
  
  })