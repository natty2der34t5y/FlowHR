// *************************************************************
//
// Strings for database connection is placed here 
//
// *************************************************************
require('dotenv').config();

 

exports.config = {
  user: process.env.USER,
  password: process.env.PASSWORD,
  server: process.env.SERVER,
  database: process.env.DATABASE
};