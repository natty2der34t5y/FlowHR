//in progress

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
            .contains('Review all timesheets')
            .click()
        
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
            .and('contain','Actions')
    
            
    })
})