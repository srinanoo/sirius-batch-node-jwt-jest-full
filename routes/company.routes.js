const express = require('express');
const router = express.Router();

// const companyController = require('../controllers/company.controllers');
const {add, read, update, del} = require('../controllers/company.controllers');
router.get("/add", add);
router.get("/read", read);
router.get("/update", update);
router.get("/delete", del);

module.exports = router;