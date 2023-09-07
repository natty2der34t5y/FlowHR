//done

describe('tableContent', () => {
    it('passes', () => {
        cy.login('sofis@gmail.com','SofiA1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[2]/div/a/div/h5')
            .click()

        cy.xpath('//*[@id="root"]/section/aside/div/ul/li[6]/span[2]/a')
            .click()
        
        cy.get('table')
            .should('exist')

        cy.get('.ant-table-thead')
            .should('contain','Name')
            .and('contain','Hours')
            .and('contain','Project')
            .and('contain','Start Date')
            .and('contain','End Date')
            .and('contain','Status')
            .and('contain','Actions')
    
            
    })
})