//done

describe('statesView', () => {
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

        cy.get('[class="rc-virtual-list-holder-inner"]')
            .contains('All statuses')
            .should('exist')

        cy.get('[class="rc-virtual-list-holder-inner"]')
            .contains('Accepted')
            .should('exist')

        cy.get('[class="rc-virtual-list-holder-inner"]')
            .contains('Amending')
            .should('exist')

        cy.get('[class="rc-virtual-list-holder-inner"]')
            .contains('Pending')
            .should('exist')

        cy.get('[class="rc-virtual-list-holder-inner"]')
            .contains('Sent')
            .should('exist')

        cy.get('[class="rc-virtual-list-holder-inner"]')
            .contains('Voided')
            .should('exist')
        
    })
})