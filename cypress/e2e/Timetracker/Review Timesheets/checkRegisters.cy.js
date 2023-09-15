//done

describe('checkRegisters', () => {
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
            .contains('Review timesheets')
            .click()
            .wait(2000)
                   
        cy.get('.ant-select-selection-item')
            .eq(2)
            .contains('10 / page')
            .click()            
        
        cy.get('.ant-select-item-option-content')
            .eq(1)
            .contains('20 / page')
            .click() 

        cy.get('.ant-select-selection-item')
            .eq(2)
            .contains('20 / page')
            .click() 

        cy.get('.ant-select-item-option-content')
            .eq(2)
            .contains('50 / page')
            .click() 

        cy.get('.ant-select-selection-item')
            .eq(2)
            .contains('50 / page')
            .click() 

        cy.get('.ant-select-item-option-content')
            .eq(3)
            .contains('100 / page')
            .click() 
            
    })
})