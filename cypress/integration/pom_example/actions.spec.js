/// <reference types="cypress" />

import TestFilter from '../../support/test-filter';
import ActionsLocator from '../../locators/actions.locator';
import ActionsPage from '../../pages/actions.pages'
import ActionsConstant from '../../constants/actions.constants'

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/actions')
  })

  // https://on.cypress.io/interacting-with-elements
  TestFilter.any(['smoke', 'regression', ''], () => {
    it('.type() Valid email - type into a DOM element', () => {
      // https://on.cypress.io/type
      Cypress.currentTest.retries(2)
      ActionsPage.enter_email(ActionsConstant.email)
      ActionsPage.type_special_keys_in_email_field()
      ActionsPage.enter_email_slow_type(ActionsConstant.email)
      ActionsPage.disabled_check()
    })
  })

  TestFilter.any(['regression', ''], () => {
    it('.type() Valid email - type into a DOM element', () => {
      // https://on.cypress.io/type
      Cypress.currentTest.retries(2)
      ActionsPage.enter_email(ActionsConstant.invalid_email)
      ActionsPage.type_special_keys_in_email_field()
      ActionsPage.enter_email_slow_type(ActionsConstant.invalid_email)
      ActionsPage.disabled_check()
    })
  })

  TestFilter.any(['regression', ''], () => {
    it('.focus() - focus on a DOM element', () => {
      // https://on.cypress.io/focus
      ActionsPage.focus_validation()
    })
  })
})
