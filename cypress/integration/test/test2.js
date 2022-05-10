import { services } from "../../support/services";
import { cypressHelper } from "../../support/cypressHelper";


describe('test', () => {
    before(() => {
            cy.login()
    });



    it('test test', () => {
        cy.task('teest')
    })
})
