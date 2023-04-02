const mysql = require('mysql2');
const knex = require('knex');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.MYSQLHOST,
    user: process.env.MYSQLUSER,
    database: process.env.MYSQLDB
});

try {
    knex({
        client: 'mysql',
        connection: {
            host : process.env.MYSQLHOST,
            port : process.env.MYSQLPORT,
            user : process.env.MYSQLUSER,
            password : process.env.MYSQLPASSWORD,
            database : process.env.MYSQLDB
        }
    });
} catch(err) {
    console.log(err);
    logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

    res.status(500).send("Error!");
}

module.exports = {
    connection,
    knex
};