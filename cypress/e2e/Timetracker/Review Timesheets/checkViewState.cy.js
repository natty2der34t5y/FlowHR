//in progress

describe('checkViewState', () => {
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
        
        cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[3]/div/div[1]/span[2]')
            .click()
         
        cy.xpath('//*[@id=\"root\"]/section/section/main/div[3]/div[2]/div[3]/div/div[2]/div/div/div/div[2]/div[1]/div/div/div[1]/div')
            .contains('All statuses')
            .click({force:true}) 
            .wait(3000)

        cy.get('.ant-table-cell-fix-right')
            .eq(1)
            .click({force:true})

      
              
        
    })
})