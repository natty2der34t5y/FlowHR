//done

describe('statesView', () => {
    it('passes', () => {
        cy.login('sofis@gmail.com','SofiA1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.get('.ant-card-body')
            .contains('Timetracker')
            .click()

        cy.get('.ant-menu-title-content')
            .contains('Manage timesheets')
            .click()
        
        cy.get('.ant-select-selection-item')
            .eq(0)
            .contains('All statuses')
            .click()

        cy.get('.ant-select-item-option')
            .should('contain','All statuses')
            .and('contain','Accepted')
            .and('contain','Amending')
            .and('contain','Sent')
            .and('contain','Voided')
            .and('contain','Pending')
           
    
    })
})