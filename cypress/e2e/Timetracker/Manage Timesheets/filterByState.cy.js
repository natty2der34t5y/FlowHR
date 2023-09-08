//done

describe('filterByState', () => {
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
            .click()

        cy.get('.ant-select-selection-item')
            .eq(0)
            .contains('All statuses')
            .click()

        cy.get('.ant-select-item-option')
            .eq(0)
            .should('contain','Accepted')
            .click()

        cy.get('.ant-select-selection-item')
            .eq(0)
            .click()

        cy.get('.ant-select-item-option')
            .eq(1)
            .should('contain','Amending')
            .click()

        cy.get('.ant-select-selection-item')
            .eq(0)
            .click()

        cy.get('.ant-select-item-option')
            .eq(2)
            .should('contain','Pending')
            .click()

        cy.get('.ant-select-selection-item')
            .eq(0)
            .click()

        cy.get('.ant-select-item-option')
            .eq(3)
            .should('contain','Sent')
            .click()

        cy.get('.ant-select-selection-item')
            .eq(0)
            .click()

        cy.get('.ant-select-item-option')
            .eq(4)
            .should('contain','Voided')
            .click()
           
        cy.get('.ant-select-selection-item')
            .eq(0)
            .click()

        cy.get('.ant-select-item-option')
            .eq(5)
            .should('contain','All statuses')
            .click()
                    
    })
})