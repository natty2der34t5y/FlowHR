//done

describe('15073', () => {
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
            .eq(1)
            .contains('Sent')
            .click()

        cy.get('.ant-select-item-option')
            .contains('All statuses')
            .click()

        cy.get('li:contains(2)')
            .first()
            .click()

        cy.get('li.ant-pagination-next')
            .click()
                
    })
})