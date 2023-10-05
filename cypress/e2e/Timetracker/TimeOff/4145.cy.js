describe('4145', () => {

    it('passes', () => {

      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.wait(1000)

      cy.get('h2').
      contains('Sofi').
      should('exist')

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()

      cy.get('h2').
      contains('List of time off').
      should('exist')
      
      cy.get('h2').
      contains('Sofi Arroyo').
      should('exist')

      cy.get('div').
      contains('Canceled').
      should('exist')

      cy.get('span[aria-label="form"]').eq(1).
      click()

      cy.wait(2000)

      cy.get('.ant-modal-title').
      contains('Edit time off').
      should('not.exist')


    })
  
  })