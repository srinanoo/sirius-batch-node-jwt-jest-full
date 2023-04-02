const conn = require('../db');

const add = (req, res) => {
    const empId = req.body.id;
    // console.log(typeof req.body);
    // console.log(req.body);
    // console.log(req.body.fname + " " + req.body.lname, " - BODY/JSON");
    // console.log(req.query.fname + " " + req.query.lname, " - QUERY");
    // res.send("Company Add" + ", NAME: " + req.body.fname+" "+req.body.lname);
    let qry;
    if(empId)
        qry = "SELECT * FROM employees WHERE id = "+empId;
    else
        qry = "SELECT * FROM employees";

    conn.query(
        qry,
        function(err, results, fields) {
          console.log(results); // results contains rows returned by server
          console.log(fields); // fields contains extra meta data about results, if available
          res.send(results);
        }
      );

    // res.send("Company ADD");
};

const read = (req, res) => {
    res.send("Company Get All Details");
};

const update = (req, res) => {
    res.send("Company Update");
}

const del = (req, res) => {
    res.send("Company Delete");
};

module.exports = {
    add,
    update,
    read,
    del
}