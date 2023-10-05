describe('4220', () => {
    //cancel time off should be executed at the end
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
      
      cy.get('[aria-label="form"]').eq(1).click()

      const dayjs = require('dayjs')

      const todayDate = dayjs().format('YYYY-MM-DD')

      cy.log(todayDate) 

      cy.get('#editAbsence_endDate').
      should("have.attr","title",todayDate)

      cy.get('.ant-picker-clear').
      eq(1).
      click()

      cy.get('button:contains(Save)').
      should('be.disabled')

      cy.get('button:contains(Cancel)').
      eq(1).
      click()

      cy.get('button:contains(Confirm)').
      click()
      
      cy.cancelTimeOffToday()
      
    })
  
  })