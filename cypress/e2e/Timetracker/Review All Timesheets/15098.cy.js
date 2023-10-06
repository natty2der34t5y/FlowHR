//done

describe('15098', () => {
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
            .contains('Amending')
            .click()

        cy.get('[aria-label="bars"]')
            .should('exist')
            .click()
            .wait(2000)

        cy.get('table')
            .should('exist')

        cy.get('.ant-table-thead')
            .should('contain','Name')
            .and('contain','Hours')
            .and('contain','Team Leader')
            .and('contain','Project')
            .and('contain','Area')
            .and('contain','Start Date')
            .and('contain','End Date')
            .and('contain','Status')
            .and('contain','Managed By')
            .and('contain','Management Date')

        
                
    })
})