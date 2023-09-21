import LoginElements from "../elements/LoginElements"

export class LoginObjects {
    visit(){
        cy.visit('/')
    }

    login(user = Cypress.env('USER'), pass = Cypress.env('PASS')){
        cy.get(LoginElements.USER_FIELD).type(user)
        cy.get(LoginElements.PASSWORD_FIELD).type(pass, {log: false})
        cy.get(LoginElements.LOGIN_BUTTON).click()
    }
}