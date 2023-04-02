const express = require('express');
const router = express.Router();

router.get("/add", (req, res) => {
    // console.log(typeof req.body);
    // console.log(req.body);
    console.log(req.body.fname + " " + req.body.lname, " - BODY/JSON");
    console.log(req.query.fname + " " + req.query.lname, " - QUERY");
    res.send("Department Add" + ", NAME: " + req.body.fname+" "+req.body.lname);
});

router.get("/edit", (req, res) => {
    res.send("Department Edit");
});
router.get("/update", (req, res) => {
    res.send("Department Update");
});
router.get("/read", (req, res) => {
    res.send("Department Get All Details");
});

module.exports = router;