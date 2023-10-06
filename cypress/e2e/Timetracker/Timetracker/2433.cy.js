//done

describe('collabCanSeeMsgs', () => {
    it('passes', () => {
        cy.login('collaboratorautomation@yopmail.com','Auto1234!')

        cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
            .click()
            .contains('Arroyo Consulting (AC)')
            .click()

        cy.get('.ant-card-body')
            .contains('Timetracker')
            .click()

        cy.get('[data-icon="comment"]')
            .first()
            .click()

        cy.get('[placeholder="Type a comment..."]')
            .first()
            .type('this is a test')

        cy.get('button:contains(Send)')
            .first()
            .click()

        cy.get('[placeholder="Type a comment..."]')
            .first()
            .type('this is a test')

        cy.get('button:contains(Send)')
            .first()
            .click()

        cy.get('button:contains(Exit)')
            .first()
            .click()

        cy.get('[data-icon="comment"]')
            .first()
            .click()

        cy.get('div:contains(View more comments)')
            .last()
            .click()

        cy.get('[class="ant-comment-content-detail"]')
            .should('exist')

    })
})