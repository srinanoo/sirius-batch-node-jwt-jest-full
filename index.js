let express = require('express');
let app = express();
let cors = require('cors');
require('dotenv').config();
let jwt = require('jsonwebtoken');
let logger = require('./logger');

app.use(express.urlencoded( {extended:false} ));
app.use(express.json());
app.use(cors({
    origin: ['http://localhost:5500', 'http://127.0.0.1:5500'],
}));

// Company Entry
const companyRoute = require('./routes/company.routes')
app.use("/company", companyRoute);

// Department Entry
const departmentRoute = require('./routes/department.routes');
app.use("/department", departmentRoute);

// Employees Entry
const employeeRoute = require('./routes/employee.routes');
app.use("/employees", employeeRoute);

app.post("/generateToken", (req, res) => {
    let userData = req.body;
    logger.info("Test Message");
    // validate the user based on the user credentials
    const token = jwt.sign(userData, process.env.JWTSECRETKEY, { expiresIn: "1h"})
    res.send(token);
});

const auth = require('./middleware/auth');
app.post("/authenticate", auth, (req, res) => {
    res.send("Valid User");
});

const path = require('path');

app.listen(process.env.PORT, () => {
    console.log("Server has started in port: "+process.env.PORT);
    logger.info("Server Started");
});