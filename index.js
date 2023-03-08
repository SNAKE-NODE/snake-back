const express = require("express");
const server = express();

//dependencies
require('dotenv').config();

const cors = require('cors');

const PORT = process.env.PORT;

server.use(cors());

//! MIDDLEWARES
server.use(express.json());
server.use(express.urlencoded({extended: true}));

const playersRoutes = require("./src/api/players/players.routes");
const topRoutes = require("./src/api/top/top.routes");

server.use('/tops', topRoutes);
server.use('/players', playersRoutes);

const db = require('./src/utils/db');
db.connectDB();

//! Errors control <- 4 params -> err, req, res, next
server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Unknown Error");
});

server.use("*", (req, res, next) => {
    const error = new Error("Route not found");
    error.status = 404;
    next(error); 
});

server.use('/', (req, res)=>{
    res.send('It Works!')
})

server.listen(PORT, () =>{
    console.log("Server is running!");
});