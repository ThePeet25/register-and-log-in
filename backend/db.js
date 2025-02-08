require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB
});

const Connection = async() => {
    try {
        await pool.query('select 1');
        console.log("database connected");
    } catch(err) {
        console.error("database can't connect", err.message);
    }
}

Connection();

module.exports = pool