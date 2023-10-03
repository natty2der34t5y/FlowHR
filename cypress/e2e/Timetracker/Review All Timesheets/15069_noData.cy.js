//done

describe('15069_noData', () => {
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
        
        cy.get('.ant-empty-description')
            .contains('No data')
            .should('exist')
                
    })
})