//done

describe('5015_reviewerFilter', () => {
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

        cy.get('[class="ant-dropdown-trigger ant-table-filter-trigger"]')
            .first()
            .click({force: true})

        cy.get('[placeholder="Search Name"]')
            .click()
            .wait(1000)
            .type('Automation')

        cy.get('button')
            .contains('Search')
            .click()
            .wait(2000)
                
    })
})