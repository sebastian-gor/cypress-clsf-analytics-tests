// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
//
Cypress.Commands.add('login', (token, username = 'user', password = 'password') => {

    function login () {
        if (!token) {
            return cy.request({
                method: 'POST',
                url: (Cypress.env('url') + '/auth/oauth/token'),
                form: true,
                headers: {
                    'Authorization': "Basic " + Cypress.env('authorizationHeader'),
                },
                body: {
                    grant_type: 'password',
                    username: Cypress.env(username),
                    password: Cypress.env(password),
                }
            })
        } else {
            cy.log("Token is: " + token)
        }
    }
    return login();
})

Cypress.Commands.add('requestMethod', ({token, method, url, body = undefined}) => {

        return cy.request({
            method: method,
            url: Cypress.env('url') + url,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: body,
        })
});

Cypress.Commands.add('requestMethodWithRetry', ({token, method, url, body = undefined, expectedStatusCode = undefined, expectedCallback = undefined, retryWait = 1000}) => {
    let retries = 0;

    function makeRequest () {
        retries++;
        return cy.request({
            method: method,
            failOnStatusCode: false,
            url: Cypress.env('url') + url,
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: body,
        }).then( resp => {
                try {
                    expect(resp.status).to.eq(expectedStatusCode)
                    if (expectedCallback !== undefined) {
                        expectedCallback(resp)
                        }
                } catch (err) {
                    cy.wait(retryWait)
                    if (retries > 5) throw new Error(`retried (${--retries}) times`)
                    return makeRequest();
                }
                return resp;

        });
    }
    return makeRequest();
});

Cypress.Commands.add('requestToConsul', ({service}) => {

    return cy.request({
        method: "GET",
        url: "http://consul-"
            +Cypress.env('consulEnvironment')+
            ".qxlint/v1/catalog/service/"
            +service+
            "?dc=dev-dc4&filter=ServiceTags%20contains%20vte92",
    })
});


export function getDate(hours = null, minutes = null) {
    let dayjs = require('dayjs')
    let date = dayjs().add(hours,'hours').add(minutes, 'minutes').format()
    return date
}
