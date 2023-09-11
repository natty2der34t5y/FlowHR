// *************************************************************
//
// Async function to run custom queries
//
// *************************************************************

 

const { config } = require('../Settings/connection')
const sql = require("mssql");

 

const runQuery = async (query) => {
    try{
        await sql.connect(config);
        const result = await sql.query(`${query}`);
        return result.recordset;
    } catch(e) {
        console.log(e)
    }
};

 

const runUpsertQuery = async (query) => {
    try{
        await sql.connect(config);
        const result = await sql.query(`${query}`);
        return result.rowsAffected;
    } catch(e) {
        console.log(e)
    }
};

 

module.exports = {
    runQuery, runUpsertQuery
}