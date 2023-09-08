//done

describe('checkEditState', () => {
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
            .wait(2000)
                   
        cy.get('[aria-label="edit"]')
            .eq(0)
            .click()            
        
    })
})