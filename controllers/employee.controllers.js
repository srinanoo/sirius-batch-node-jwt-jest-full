const conn = require('../db');
const logger = require('../logger');


const add = (req, res) => {
    const empId = req.body.id;

    try {
        conn.knex.select('*')
            .from('employees')
            .where({id: empId})
            .then(data => {
                console.log(data);
                res.send(data);
            });
    } catch(err) {
        console.log(err);
        logger.error(`${err.status || 500} - ${res.statusMessage} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);

        res.status(500).send("Error!");
    }
};

module.exports = {
    add
};