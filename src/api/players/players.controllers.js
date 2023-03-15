const Player = require("./players.model")
const bcrypt = require("bcrypt")
const { generateSign } = require("../../utils/jwt")

const newPLayer = async (req, res, next)=>{
    try {
        const newPlayer = await new Player (req.body)
        await newPlayer.save()
        return res.status(201).json(newPlayer)
    } catch (error) {
        next(error)
        
    }
}
const getPlayersById = async (req, res, next) => {
    try {
        const { id } = req.body
        const player = await Player.findById(id)
        return res.json(player)
    } catch (error) {
        return next(error)
    }
}
const login = async (req, res, next)=>{
    try {
        const PlayerToLog = await Player.findOne({user: req.body.user})
        if (!PlayerToLog) {
            return req.status(500).json("No existe el usuario")
        }
        if (bcrypt.compareSync(req.body.password, PlayerToLog.password)) {
            const token = generateSign(PlayerToLog._id, PlayerToLog.user);
            return res.status(200).json({token, PlayerToLog})
            
        } else {
            return res.status(500).json("Contraseña incorrecta")
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {newPLayer, getPlayersById, login}

