// const {Client} = require('pg');

// const DB_NAME = 'pw';

// const DB_URL = `postgres://localhost:5432/${DB_NAME}`;

// let client; 

// client = new Client(DB_URL);
// console.log('client!!')
const { Pool } = require('pg');
require("dotenv").config();
const PORT = process.env.PORT;
// Create a connection pool using the connection information provided on bit.io.
const client = new Pool({
    user: 'mark-zimmerman',
    host: 'db.bit.io',
    database: process.env.DATABASE_URL, // public database 
    password: 'v2_3w9cY_ZDYzPGhwpTzydTPSBXV2BBH', // key from bit.io database page connect menu
    port: PORT,
    ssl: true,
});
console.log('pool', client)

module.exports = client;