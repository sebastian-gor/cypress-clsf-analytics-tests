/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

const { cypressConfigResolver } = require('../config/cypress-config');

module.exports = (on, config) => {
    require('cypress-terminal-report/src/installLogsPrinter')(on, {
        printLogsToConsole: "always",
        defaultTrimLength: 500,
        routeTrimLength: 500
    });

    token = null

    on('task', {
        setToken: (vale) => {
            return (token = vale);
        },

        getToken: () => {
            return token;
        },

        setId: (val) => {
            return (id = val);
        },

        getId: () => {

            return id;
        },

        teest: async () => {

            id = null
            return id;
        }
    })
    // `on` is used to hook into various events Cypress emits
    // `config` is the resolved Cypress config
    return cypressConfigResolver();
};
