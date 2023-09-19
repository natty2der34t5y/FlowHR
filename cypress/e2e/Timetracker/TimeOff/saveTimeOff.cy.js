describe('saveTimeOff', () => {
    //cancel time off should be executed at the end
    it('passes', () => {
  
      cy.login('sofis@gmail.com','SofiA1234!')

      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"]').click()

      cy.wait(1000)

      cy.get('#addPerson_reasonId').click()

      cy.get('.ant-select-dropdown')
      .contains('License').click()
      
      cy.get('#addPerson_startDate')
      .click()
       
      cy.get('.ant-picker-cell-today')
      .click()
      
      cy.get('#addPerson_endDate').click()

      cy.get('.ant-picker-cell-today').eq(1).click()
      
      cy.get('#comment').type('This is a test comment 10 01 10101')
      
      cy.wait(3000)
      
      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"').eq(1).should('be.enabled')
      .click({force:true})

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"]').eq(1).should('be.enabled')
      .click({force:true})
    })
  
  })