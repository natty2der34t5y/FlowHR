//done

describe('collabHoursRequired', () => {
    it('passes', () => {
        cy.login('collaboratorautomation@yopmail.com','Auto1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.get('.ant-card-body')
            .contains('Timetracker')
            .click()

        cy.get('[class="anticon anticon-plus"]')
            .first()
            .click()
        
        cy.get('.ant-picker-input')
            .last()
            .click()

        cy.get('.ant-picker-time-panel-cell')
            .eq(6)
            .click()

        cy.get('.ant-select-selection-search-input')
            .type('testing')

        cy.get('button')
            .contains('Add task')
            .click()

        cy.get('.ant-picker-input')
            .eq(15)
            .click()

        cy.get('.ant-picker-time-panel-cell')
            .eq(6)
            .click()

        cy.get('.ant-select-selection-search-input')
            .first()
            .type('testing')

        cy.get('[placeholder="Add a note"]')    
            .first()
            .click()

        cy.get('[class="ant-btn ant-btn-primary"]') 
            .last()
            .click()

        

    })
})