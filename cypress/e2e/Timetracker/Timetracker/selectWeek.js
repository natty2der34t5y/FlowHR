//done

describe('selectWeek', () => {
    it('passes', () => {
        cy.login('sofis@gmail.com','SofiA1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.get('.ant-card-body')
            .contains('Timetracker')
            .click()
            
        cy.get('.ant-picker-input')
            .eq(0)
            .should('exist')

        cy.get('.ant-picker-input')
            .eq(0)
            .click()

        cy.get('.ant-picker-cell-inner')
            .first()
            .click({force: true})

           
    })
})

