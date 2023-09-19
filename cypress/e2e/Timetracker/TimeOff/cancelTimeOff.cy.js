describe('cancelTimeOff', () => {
    //saveTimeOff should be executed first
    it('passes', () => {

      cy.login('sofis@gmail.com','SofiA1234!')
  
      cy.wait(1000)

      cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]').click()

      cy.contains('Arroyo Consulting (AC)').click()

      cy.get('a[href="/timetracker"]').click()

      cy.get('a[href="/timetracker/timeOff"]').click()

      cy.get('[class="anticon anticon-close-circle sc-gDyJDg dmrAcv"]').eq(0).click()

      cy.get('button[class="ant-btn ant-btn-primary"]').eq(1).click()
      
      cy.wait(1000)
      
      cy.get('div[class="sc-fGgQJw kzcXdM"]').eq(0).should("have.attr","color","canceled")

    })
  
  })