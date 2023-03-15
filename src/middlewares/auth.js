const Player = require("../api/players/players.model")
const { verifyJwt } = require("../utils/jwt")
const isAuth = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        if(!token){
            return res.json("No estás autorizado")
        }
        const parsedToken = token.replace("Bearer ", "")
        const validToken = verifyJwt(parsedToken)
        const playerLoged = await Player.findById(validToken.id)

        playerLoged.password = null
        req.user = playerLoged
        next()
    } catch (error) {
        return res.json(error)
    }
}
module.exports = {
    isAuth
}