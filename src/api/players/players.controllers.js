const jwt = require('jsonwebtoken');
require('dotenv').config();

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
        const { id } = req.params
        const player = await Player.findById(id)
        if(!player){
            return res.json("Jugador no encontrado, el id no existe")
        }
        return res.json(player)
    } catch (error) {
        return next(error)
    }
}
const login = async (req, res, next) => {
    try {
      const playerToLog = await Player.findOne({ user: req.body.user });
      if (!playerToLog) {
        return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
      }
      if (bcrypt.compareSync(req.body.password, playerToLog.password)) {
        const token = jwt.sign({ user_id: playerToLog._id }, process.env.TOKEN_SECRET, { expiresIn: '1h' });
        return res.status(200).json({ token, player: playerToLog });
      } else {
        return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
      }
    } catch (error) {
      next(error);
    }
  }
  

module.exports = {newPLayer, getPlayersById, login}

