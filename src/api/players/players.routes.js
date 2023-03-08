const { newPLayer, login } = require("./players.controllers");
const playersRoutes = require("espress").Router()
playersRoutes.post("/registro", newPLayer)
playersRoutes.post("/login", login)
module.exports = playersRoutes

