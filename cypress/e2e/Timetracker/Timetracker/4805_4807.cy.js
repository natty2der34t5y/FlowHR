//done

describe('collabDeleteButton', () => {
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
        
        cy.get('.ant-picker-clear')
            .last()
            .click()

        cy.get('.ant-picker-time-panel-cell-inner')
            .eq(8)
            .click()

        cy.get('button')
            .contains('OK')
            .click()
        
        cy.get('.ant-select-selection-search-input')
            .type('testing')

        cy.get('.note-label')
            .click()

        cy.get('button')
            .contains('Add task')
            .click()

        cy.get('[data-icon="minus-circle"]')
            .last()
            .click()

        cy.get('.ant-select-selection-search-input')
            .contains('testing')
            .should('not.exist')

    })
})