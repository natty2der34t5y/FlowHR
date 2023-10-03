describe('4195', () => {

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

      cy.get('#addPerson_startDate')
      .click()
       
      cy.get('.ant-picker-cell-today')
      .click()

      cy.get('#addPerson_startDate')
      .should("have.attr","aria-required","true")
      
      cy.get('#addPerson_endDate').click()

      cy.get('.ant-picker-cell-today').eq(1).click()

      cy.get('#addPerson_endDate')
      .should("have.attr","aria-required","true")
   
    })
  
  })