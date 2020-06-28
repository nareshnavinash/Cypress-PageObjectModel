const { curry } = require("cypress/types/lodash")

describe('Hooks', () => {
    beforeEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
    })

    before(() => {
        cy.log('I run only once before all the test cases')
    })

    after(() => {
        cy.log('I run only once after all the test cases')
    })

    afterEach(() => {
        cy.log('I run after each every test in every spec file!!!!!')
    })
})
