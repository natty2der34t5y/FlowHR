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

      cy.saveTimeOffToday()

      cy.wait(1000)
      
      cy.get('span[class="anticon anticon-form sc-lgWdIC cRRXke"]').eq(1).click() //Edit click

      cy.wait(1000)

      cy.get('input[type="file"]').attachFile('test_wrongformat.webp')

      cy.wait(500)

      cy.get('.ant-notification-notice-description')
      .contains('Format file not allowed')
      .should('exist')
      
      cy.get('input[type="file"]').attachFile('test_more5mb.jpg')
      
      cy.wait(500)
      
      cy.get('.ant-notification-notice-description')
      .contains('File size cannot be larger than 5MB')
      .should('exist')
      cy.get('input[type="file"]').attachFile('test1.jpg')

      cy.get('#comment').type('This is an edit comment 10 01 10101')
  
      cy.wait(1000)
  
      cy.get('button:contains(Send)').
      should('be.enabled').
      click()

      cy.get('button:contains(Save)').
      should('be.enabled').
      click()

      cy.wait(2000)

      cy.cancelTimeOffToday()
      //add more validations
  
    })
  
  })