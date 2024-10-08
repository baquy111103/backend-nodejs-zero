const express = require('express');
const path = require('path');
require('dotenv').config()

const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

const app = express()
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME

const mysql = require('mysql2');

//config req.body
app.use(express.json())
app.use(express.urlencoded({ extends: true }))

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

//test connection


app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})  