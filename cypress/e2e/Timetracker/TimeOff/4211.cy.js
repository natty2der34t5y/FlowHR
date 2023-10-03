describe('4211', () => {

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

      cy.get('#comment').type('This is the first comment')
      
      cy.get('#comment')
      .should("have.attr","aria-required","true")

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"').eq(1).should('be.enabled')
      .click({force:true})

      cy.get('#comment').type('This is the second comment')
      
      cy.get('#comment')
      .should("have.attr","aria-required","true")

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"').eq(1).should('be.enabled')
      .click({force:true})

      cy.get('#comment').type('This is the third comment')
      
      cy.get('#comment')
      .should("have.attr","aria-required","true")

      cy.get('[class="ant-btn ant-btn-primary sc-gtsrHT cjsSOE"').eq(1).should('be.enabled')
      .click({force:true})

      cy.get('div').
      contains('View more comments').
      should('exist')

      cy.get('div').
      contains('View more comments').
      click()

      cy.get('.ant-comment-content-detail').
      contains('This is the first comment').
      should('be.visible')
      
      cy.get('.ant-comment-content-detail').
      contains('This is the second comment').
      should('be.visible')

      cy.get('.ant-comment-content-detail').
      contains('This is the third comment').
      should('be.visible')
    })
  
  })