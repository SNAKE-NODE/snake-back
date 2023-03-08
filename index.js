//dependencies
require('dotenv').config();
const PORT = process.env.PORT;

const playersRoutes = require("./src/api/players/players.routes");

const db = require('./src/utils/db');
db.connectDB();

const express = require("express");
const server = express();

const cors = require('cors');
server.use(cors());


//! MIDDLEWARES
server.use(express.json());
server.use(express.urlencoded({extended: true}));


