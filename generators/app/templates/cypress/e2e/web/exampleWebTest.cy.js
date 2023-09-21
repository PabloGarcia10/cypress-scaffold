import { LoginObjects } from "../../support/web/objects/LoginObjects";

const login = new LoginObjects()

context('web test example', () => {
    login.visit()
    login.login()
});