import { services } from "../../support/services";
import { cypressHelper } from "../../support/cypressHelper";


describe('test', () => {
  before(() => {
          cy.login()
  });

  it('test test', () => {
      cy.requestToConsul({
          service:services.offerCoreService,
      })
          .then((resp) => {
              expect(resp.status).to.eq(200)
              cypressHelper.variables.consulHost = resp.body.Address
              // cy.task('getId')
              cy.log(resp.body[0].Address)
              cy.task('setId', resp.body[0].Address)
          })
          // .its('body')
          // .then(api.assertSchema('test', '1.0.0'))
  })

    it('test test', () => {
        cy.task('getId').toString()
    })
})