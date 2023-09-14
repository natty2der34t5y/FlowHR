//done

describe('adminTableContent', () => {
    it('passes', () => {
        cy.login('adminautomation@yopmail.com','Auto1234!')

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
            .eq(0)
            .contains('All projects')
            .should('exist')
            .click()

        cy.get('.ant-select-selection-search-input')
            .last()
            .click({force: true})
                
    })
})