const {Client} = require('pg');

const DB_NAME = 'pw';

const DB_URL = `postgres://localhost:5432/${DB_NAME}`;

let client; 

client = new Client(DB_URL);
console.log('client!!')
module.exports = client;