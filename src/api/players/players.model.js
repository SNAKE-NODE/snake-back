const mongoose = require ("mongoose")
const bcrypt = require("bcrypt")
const playerSchema = mongoose.Schema(
    {
        user: {type: String, required: true, unique: true},
        password: {type: String, trim: true, required: true},

    },
    {timestamps: true,
    collection: "players"}
)
playerSchema.pre("save",function(next){
    this.password = bcrypt.hashSync(this.password, 10)
    next()
})
const Player = mongoose.model("players", playerSchema)

module.exports = Player