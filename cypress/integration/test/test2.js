import { services } from "../../support/services";
import { cypressHelper } from "../../support/cypressHelper";


describe('test', () => {
  before(() => {
      cy.login(cypressHelper.variables.token).then((resp) => {
          cypressHelper.variables.token = cypressHelper.variables.token?cypressHelper.variables.token:resp?.body?.access_token
      });
  });

  it('test test', () => {
      cy.requestMethod({
          token: cypressHelper.variables.token,
          method: "GET",
          url: cypressHelper.variables.consulHost
      })
          .then((resp) => {
            expect(resp.status).to.eq(200)
          })
          // .its('body')
          // .then(api.assertSchema('test', '1.0.0'))
  })
})