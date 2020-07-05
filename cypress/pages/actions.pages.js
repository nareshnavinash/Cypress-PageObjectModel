/// <reference types="cypress" />

import ActionsLocator from '../locators/actions.locator';

var ActionsPage = {

    enter_email: function(email) {
        cy.get(ActionsLocator.email())
        .type(email).should('have.value', email)
    },

    type_special_keys_in_email_field: function(){
        // .type() with special character sequences
        cy.get(ActionsLocator.email())
        .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
        .type('{del}{selectall}{backspace}')

        // .type() with key modifiers
        .type('{alt}{option}') //these are equivalent
        .type('{ctrl}{control}') //these are equivalent
        .type('{meta}{command}{cmd}') //these are equivalent
        .type('{shift}')
    },

    enter_email_slow_type: function(email) {
        // Delay each keypress by 0.1 sec
        cy.get(ActionsLocator.email())
        .type('slow.typing@email.com', { delay: 100 })
        .should('have.value', 'slow.typing@email.com')
        .screenshot()
    },

    disabled_check: function() {
        cy.get(ActionsLocator.action_disabled())
        // Ignore error checking prior to type
        // like whether the input is visible or disabled
        .type('disabled error checking', { force: true })
        .should('have.value', 'disabled error checking')
    },

    focus_validation: function() {
        cy.get(ActionsLocator.focus_locator()).focus()
        .should('have.class', 'focus')
        .prev().should('have.attr', 'style', 'color: orange;')
    }
};

export default ActionsPage;