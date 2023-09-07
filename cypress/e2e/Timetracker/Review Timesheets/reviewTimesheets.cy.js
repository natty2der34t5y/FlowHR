//done

describe('reviewTimesheets', () => {
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
        
        cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[2]/div')
            .click()

        cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[2]/div[2]/div/div/div/div[2]/div/div[1]/div/div[2]/table/tbody/tr[1]/td[3]/div')
            .click()

        cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[2]/div[2]/div/div/div/div[2]/div/div[1]/div/div[2]/table/tbody/tr[5]/td[5]/div')
            .click()

        cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/button')
            .click()

    })
})