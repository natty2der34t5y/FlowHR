//done

describe('15077_15078_15079_15080', () => {
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
            .click()
            .wait(2000)

        cy.get('[aria-label="search"]')    
            .first()
            .click()

        cy.get('[placeholder="Search Managed By"]')
            .type('Reviewer')

        cy.get('button:contains(Search)')
            .click()

        cy.get('[aria-label="search"]')    
            .last()
            .click()

        cy.get('[placeholder="Search Management Date"]')
            .click()

        cy.get('.ant-picker-cell-inner')
            .first()
            .click()

        cy.get('button:contains(Search)')
            .last()
            .click()

        cy.get('[aria-label="search"]')    
            .first()
            .click()

        cy.get('button:contains(Reset)')
            .first()
            .click()

        cy.get('[aria-label="search"]')    
            .eq(2)
            .click()

        cy.get('button:contains(Reset)')
            .last()        
            .click()
                
    })
})