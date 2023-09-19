describe('viewTimeOff', () => {

    it('passes', () => {

      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()

      cy.get('[aria-label="form"]').eq(1).click()

      cy.wait(2000)

      cy.get('.ant-select-selection-item').eq(2).click()

      cy.get('.ant-select-dropdown')
      .contains('License').should('exist')
      
      cy.get('.ant-select-dropdown')
      .contains('Medical Leave').should('exist')
      
      cy.get('.ant-select-dropdown')
      .contains('Other').should('exist')

      cy.get('.ant-select-dropdown')
      .contains('Personal Emergency').should('exist')
      
      cy.get('.ant-select-dropdown')
      .contains('Vacation').should('exist')
      
      cy.get('input[name="startDate"]')
      .should("have.attr","aria-required","true")
      
      cy.get('input[name="endDate"]')
      .should("have.attr","aria-required","true")
      
      cy.get('#comment').type('This is a test comment 10 10 101 01')
      
      cy.get('#comment')
      .should("have.attr","aria-required","true")
      
      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"]').eq(1).should('be.enabled')
      .click({force:true})

    })
  
  })