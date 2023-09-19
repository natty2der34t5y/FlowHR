describe('editSaveTimeOff', () => {

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

      cy.wait(1000)
      
      cy.get('.ant-select-dropdown')
      .contains('License').click()

      cy.get('#editAbsence_reasonId')
      .should("have.attr","aria-required","true")
      
      cy.get('input[name="startDate"]')
      .should("have.attr","aria-required","true")
      
      cy.get('input[name="endDate"]')
      .should("have.attr","aria-required","true")

      cy.get('#comment').type('This is a test comment 10 10 101 01 edit')
      
      cy.get('#comment')
      .should("have.attr","aria-required","true")

      cy.wait(3000)

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"]').eq(1).should('be.enabled')
      .click({force:true})
      
      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"]').eq(1).should('be.enabled')
      .click({force:true})
    })
  
  })