const { defineConfig } = require("cypress");
const { error } = require("cypress/types/jquery");

module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qaflowhrweb.azurewebsites.net/login',
  },
});

require('@cypress/grep/src/plugin')(config);
      on("task", {
        runQuery: async (query) => {
            return await db.runQuery(query);
        }
      });
      on("task", {
        runUpsertQuery: async (query) => {
            return await db.runUpsertQuery(query);
        }
      });


