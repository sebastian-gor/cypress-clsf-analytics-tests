import { services } from "../../support/services";
import { cypressHelper } from "../../support/cypressHelper";


describe('test', () => {
    before(() => {
        cy.task('getToken').then(value => {
            cy.login(value)
        });
    });



    it('test test', () => {
        cy.task('teest')
    })
})
