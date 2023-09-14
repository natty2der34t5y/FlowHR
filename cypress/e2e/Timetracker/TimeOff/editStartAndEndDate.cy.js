describe('editStartAndEndDate', () => {

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

      //cy.get('.ant-picker-input').eq(2)
      cy.get('input[name="startDate"]')
      .click()
      
      cy.get('input[name="startDate"]')
      .should("have.attr","aria-required","true")
      
      cy.get('.ant-picker-cell-today')
      .click()

      
      cy.get('input[name="endDate"]')
      .click()
      
      cy.get('input[name="endDate"]')
      .should("have.attr","aria-required","true")

      cy.get('.ant-picker-cell-today').eq(1).click()
      
    })
  
  })