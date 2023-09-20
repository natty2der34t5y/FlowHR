describe('reviewTimeOffStatus', () => {

    it('passes', () => {

      cy.login('leaderautomation_jp@yopmail.com','Auto1989$')
  
      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
      .click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/reviewTimeOff"]').click()

      cy.get('[class="ant-select sc-eirqVv ozpNv ant-select-single ant-select-show-arrow"]').eq(1).click()
      
      cy.wait(2000)

      cy.get('.ant-select-item-option-content')
      .contains('Accepted')
      .should("exist")

      cy.get('.ant-select-item-option-content')
      .contains('Amending')
      .should("exist")

      cy.get('.ant-select-item-option-content')
      .contains('Canceled')
      .should("exist")

      cy.get('.ant-select-item-option-content')
      .contains('Sent')
      .should("exist")

      cy.get('.ant-select-item-option-content')
      .contains('Voided')
      .should("exist")
      
      cy.get('.ant-select-item-option-content')
      .contains('All statuses')
      .should("exist")
      
      cy.get('.ant-select-item-option-content')
      .contains('Sent').click()
    
    })
  
  })