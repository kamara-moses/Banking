const { Pool } = require("pg");

const pool = new Pool({
    use: "postgres",
    password: "root",
    host: 'localhost',
    port: "2345",
    database: "bank_account"
})