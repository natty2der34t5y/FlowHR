//done

describe('filterByPeriodicity', () => {
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
            .contains('Time report')
            .click()
        
        cy.get('.ant-select-selection-search-input')
            .should('exist')
            .click()

        cy.get('.ant-select-item-option-content')
            .should('contain','General')
            .and('contain','Weekly')
            
           
    
    })
})