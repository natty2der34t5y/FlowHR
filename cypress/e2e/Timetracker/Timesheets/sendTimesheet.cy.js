//in progress

describe('sendTimesheets', () => {
    it('passes', () => {
        cy.login('sofis@gmail.com','SofiA1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[2]/div/a/div/h5')
            .click()

        cy.get('.ant-menu-title-content')
            .contains('Timesheets')
            .click()
        
        cy.get('button','.ant-table-filter-column')
            .contains('Status')
            

    })
})