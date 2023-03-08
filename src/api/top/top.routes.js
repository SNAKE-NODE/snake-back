const { getTops } = require("./top.controllers")

const topRoutes = require("express").Router()

topRoutes.get("/", getTops)

module.exports = topRoutes