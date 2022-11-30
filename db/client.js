// const {Client} = require('pg');

// const DB_NAME = 'pw';

// const DB_URL = `postgres://localhost:5432/${DB_NAME}`;

// let client; 

// client = new Client(DB_URL);
// console.log('client!!')
const { Pool } = require('pg');
require("dotenv").config();
// const PORT = process.env.DBPORT;
const DBPORT = 5432;
// Create a connection pool using the connection information provided on bit.io.
const client = new Pool({
    user: 'mark-zimmerman',
    host: 'db.bit.io',
    database: process.env.DATABASE_URL, // public database 
    password: 'v2_3w9cY_ZDYzPGhwpTzydTPSBXV2BBH', // key from bit.io database page connect menu
    port: DBPORT,
    ssl: true,
});
console.log('pool', client)

module.exports = client;