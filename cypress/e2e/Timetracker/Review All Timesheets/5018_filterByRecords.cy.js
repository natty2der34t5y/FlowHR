//done

describe('filterByRecords', () => {
    it('passes', () => {
        cy.login('reviewerautomation@yopmail.com','Auto1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.get('.ant-card-body')
            .contains('Timetracker')
            .click()

        cy.get('.ant-menu-title-content')
            .contains('Review all timesheets')
            .click()

        cy.get('.ant-select-selection-item')
            .contains('Sent')
            .click()

        cy.get('[class="ant-select-item ant-select-item-option"]')
            .first()
            .click()
            .wait(3000)
                   
        cy.get('.ant-select-selection-item')
            .eq(2)
            .contains('10 / page')
            .click()            
        
        cy.get('[class="ant-select-item ant-select-item-option"]')
            .contains('20 / page')
            .click() 

        cy.get('.ant-select-selection-item')
            .eq(2)
            .contains('20 / page')
            .click() 

        cy.get('[class="ant-select-item ant-select-item-option"]')
            .contains('50 / page')
            .click() 

        cy.get('.ant-select-selection-item')
            .eq(2)
            .contains('50 / page')
            .click() 

        cy.get('[class="ant-select-item ant-select-item-option"]')
            .contains('100 / page')
            .click() 
            
    })
})