//done

describe('collabCantRegisterHours', () => {
    it('passes', () => {
        cy.login('collaboratorautomation@yopmail.com','Auto1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.get('.ant-card-body')
            .contains('Timetracker')
            .click()

        cy.get('button')
            .contains('Submit')
            .should('not.be.enabled')

    
    })
})