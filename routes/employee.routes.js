const express = require('express');
const router = express.Router();

const employeeController = require('../controllers/employee.controllers');
router.get("/add", employeeController.add);

router.get("/edit", (req, res) => {
    res.send("Employees Edit");
});
router.get("/update", (req, res) => {
    res.send("Employees Update");
});
router.get("/read", (req, res) => {
    res.send("Employees Get All Details");
});

module.exports = router;