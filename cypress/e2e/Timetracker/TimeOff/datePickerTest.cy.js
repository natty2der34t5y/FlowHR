describe('selectStartAndEndDate', () => {

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

      //pick end date bigger than current date logic
      let date = new Date()
      cy.log(date.getDate()) //log current day
      date.setDate(date.getDate() + 10)
      let futureDay = date.getDate()
      let futureMonth = date.toLocaleString('default',{month: 'short'})
      cy.log(futureDay) // log future day
      cy.log(futureMonth.toLocaleLowerCase()) //log future month

      cy.get('#addPerson_endDate').click()
      cy.wait(2000)
      cy.get('.ant-picker-month-btn').eq(1).invoke('text').then(text =>{

        var testing1 = text.trim()
        cy.log(testing1)
      })
      

      cy.get('.ant-picker-month-btn').eq(1).invoke('text').then(dateAttribute =>{

        cy.log('inside the code')
        var deit = dateAttribute.toLocaleLowerCase()
        cy.log(deit)
        cy.log(futureMonth)
        var condition = !dateAttribute.includes(futureMonth)
        cy.log(condition) // log true or false
        if(futureMonth.toLocaleLowerCase() === 'sept'){
          cy.log('inside the first if')
          futureMonth = 'sep'
          if(!deit.includes(futureMonth)){
            cy.log('inside the second if')
            cy.get('.ant-picker-next-icon').eq(1).click()
            cy.get('td[class="ant-picker-cell ant-picker-cell-in-view"]')
            .contains(futureDay).click()
        } else {
          cy.log('inside the second else')
            cy.get('td[class="ant-picker-cell ant-picker-cell-in-view"]')
            .contains(futureDay).click()
        }

        }
        

      })



      
      
      

      //cy.get('.ant-picker-cell-today').eq(1).click()

      cy.get('#addPerson_endDate')
      .should("have.attr","aria-required","true")
   
    })
  
  })