describe('4150', () => {

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
      
      cy.get('h2').
      contains('Sofi Arroyo').
      should('exist')

      cy.get('span').
      contains('10 / page').
      should('exist')

      cy.get('.ant-select-selection-item').
      contains('10 / page').
      click()

      cy.get('div').
      contains('20 / page').
      click()
      
      cy.wait(1500)

      cy.get('span').
      contains('20 / page').
      should('exist')
      
      cy.scrollTo('bottom',{ensureScrollable: false})

      cy.get('.ant-select-selection-item').
      contains('20 / page').
      click()
     
      cy.get('div').
      contains('50 / page').
      click()
      
      cy.wait(1500)

      cy.get('span').
      contains('50 / page').
      should('exist')

      cy.scrollTo('bottom',{ensureScrollable: false})

      cy.get('.ant-select-selection-item').
      contains('50 / page').
      click()

      cy.get('div').
      contains('100 / page').
      click()

      cy.wait(1500)

      cy.scrollTo('bottom',{ensureScrollable: false})

      cy.get('span').
      contains('100 / page').
      should('exist')

    })
  
  })