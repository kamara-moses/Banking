const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    password: "KyMyAr091217$",
    host: 'localhost',
    port: "4321",
    database: "bank_account"
});

module.exports = { pool };