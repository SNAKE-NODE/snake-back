const { newPLayer, login, getAllPlayers } = require("./players.controllers");
const playersRoutes = require("express").Router()
playersRoutes.post("/registro", newPLayer)
playersRoutes.post("/login", login)
playersRoutes.get("/", getAllPlayers)
module.exports = playersRoutes