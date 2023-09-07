//done

describe('Navigation', () => {
  it('passes', () => {
    cy.login('sofis@gmail.com','SofiA1234!')

    cy.get('[class="ant-select sc-eirqVv lhJykP ant-select-single ant-select-show-arrow"]')
    .click()
    .contains('Arroyo Consulting (AC)')
    .click()

    cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[1]/div/a/div/h5')
    .click()

    cy.wait(3000)

    cy.xpath('//*[@id="root"]/section/aside/div/a/img')
    .click()

    cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[2]/div/a/div/h5')
      .click()

    cy.wait(3000)

    cy.xpath('//*[@id="root"]/section/aside/div/a/img')
    .click()

    cy.xpath('//*[@id="root"]/section/section/main/div[3]/div[2]/div[3]/div/a/div/h5')
    .click()

    cy.wait(3000)

    cy.xpath('//*[@id="root"]/section/aside/div/a/img')
    .click()
    
  })
})