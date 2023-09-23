import { LoginObjects } from "../../support/web/pageObjects/LoginObjects";

const login = new LoginObjects()

context('web test example', () => {
    it('test example', () => {
        login.visit()
        login.login()
    });
});