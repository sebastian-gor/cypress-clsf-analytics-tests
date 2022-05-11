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
          // .its('body')
          // .then(api.assertSchema('test', '1.0.0'))
  })
})