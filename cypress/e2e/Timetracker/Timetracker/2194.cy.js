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

        cy.get('[placeholder="Select week"]')
            .click()

        cy.get('[class="ant-picker-header-super-prev-btn"]')
            .click()

        cy.get('[class="ant-picker-header-super-prev-btn"]')
            .click()

        cy.get('[class="ant-picker-header-super-prev-btn"]')
            .click()

        cy.get('[class="ant-picker-header-super-prev-btn"]')
            .click()

        cy.get('[class="ant-picker-header-super-prev-btn"]')
            .click()

        cy.get('[class="ant-picker-header-super-prev-btn"]')
            .click()

        cy.get('[class="ant-picker-header-super-prev-btn"]')
            .click()

        cy.get('[class="ant-picker-header-super-prev-btn"]')
            .click()

        cy.get('.ant-picker-cell-inner')
            .first()
            .click()

        cy.get('p')
            .contains('There is not a time period for the selected week. It was not possible to obtain or create a timesheet for the person because they are not assigned to a project that corresponds to the current week or the selected period.')
            .should('exist')



    })
})