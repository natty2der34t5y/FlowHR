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

const mysql = require("mysql");
function queryTestDb(query, config){
  const connection = mysql.createConnection(config.env.db);
  connection.connect();
  return new Promise((resolve, reject) => {
    connection.query(query, (error, results) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(results);
      }
    })
  })
}


