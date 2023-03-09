//dependencies
require('dotenv').config();
const PORT = process.env.PORT;

const playersRoutes = require("./src/api/players/players.routes");
const topRoutes = require("./src/api/top/top.routes");

const express = require("express");
const server = express();

const cors = require('cors');
server.use(cors());

//! MIDDLEWARES
server.use(express.json());
server.use(express.urlencoded({extended: true}));

server.use('/tops', topRoutes);
server.use('/players', playersRoutes);

const db = require('./src/utils/db');
db.connectDB();



server.use((err, req, res, next) => {
    return res.status(err.status || 500).json(err.message || "Error inesperado")
})
server.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
})


server.use('/', (req, res)=>{
    res.send('It Works!')
})


server.listen(PORT, () =>{
    console.log("Server is running!");
});
