const { newPLayer, login, getPlayersById } = require("./players.controllers");
const playersRoutes = require("express").Router()
playersRoutes.post("/registro", newPLayer)
playersRoutes.post("/login", login)
playersRoutes.get("/:id", getPlayersById)
module.exports = playersRoutes