const { isAuth } = require("../../middlewares/auth")
const { getTops, newTop } = require("./top.controllers")

const topRoutes = require("express").Router()

topRoutes.get("/", getTops)
topRoutes.post("/", [isAuth], newTop)

module.exports = topRoutes