//done

describe('tableContent', () => {
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
        
        cy.get('table')
            .should('exist')

        cy.get('.ant-table-thead')
            .should('contain','Name')
            .and('contain','Hours')
            .and('contain','Start date')
            .and('contain','End date')
            .and('contain','Status')
            .and('contain','Actions')
    
            
    })
})