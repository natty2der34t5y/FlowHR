import 'cypress-file-upload'

describe('4169', () => {

    it('passes', () => {

      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

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

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"]').click()

      cy.wait(1000)

      cy.get('input[type="file"]').attachFile('test.png')
  
    })
  
  })