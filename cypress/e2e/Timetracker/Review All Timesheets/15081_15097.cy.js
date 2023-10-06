//done

describe('15081_15097', () => {
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

        cy.get('[aria-label="search"]')    
            .first()
            .click()

        cy.get('[placeholder="Search Managed By"]')
            .type('no data filter')

        cy.get('button:contains(Search)')
            .click()
            .wait(2000)

        cy.get('div:contains(No data)')

        
                
    })
})