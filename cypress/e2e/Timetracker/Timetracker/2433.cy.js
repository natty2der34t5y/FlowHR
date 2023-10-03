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

        cy.get('button')
            .contains('Send')
            .click()

        cy.get('[placeholder="Type a comment..."]')
            .first()
            .type('this is a test')

        cy.get('button')
            .contains('Send')
            .click()

        cy.get('button')
            .contains('Exit')
            .click()

        cy.get('[data-icon="comment"]')
            .first()
            .click()

        cy.get('class')
            .contains('View more comments')
            .click()

        cy.get('[class="ant-comment-content-detail"]')
            .should('exist')

    })
})