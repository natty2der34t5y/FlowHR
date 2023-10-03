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
        
        cy.get('.ant-select-selection-search-input')
            .type('testing')
        
        cy.get('.note-label')
            .click()

        cy.contains('You must enter a minimum of one minute and a maximum of 15 hours in the hours field')
            .should('exist')
        
        cy.get('button')
            .eq(43)
            .contains('Save')
            .should('not.be.enabled')

    })
})