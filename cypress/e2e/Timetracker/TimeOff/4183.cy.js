import 'cypress-file-upload'

describe('4183', () => {

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

      cy.wait(500)

      cy.get('a').contains('test1.jpg').should('exist')
      
      cy.get('input[type="file"]').attachFile('test.pdf')

      cy.wait(500)
      
      cy.get('a').contains('test.pdf').should('exist')

      cy.get('input[type="file"]').attachFile('testjpeg.jpg')

      cy.wait(500)
      
      cy.get('a').contains('testjpeg.jpg').should('exist')

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
      
    })
  
  })