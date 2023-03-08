const { newPLayer, login } = require("./players.controllers");
const playersRoutes = require("express").Router()
playersRoutes.post("/registro", newPLayer)
playersRoutes.post("/login", login)
module.exports = playersRoutes