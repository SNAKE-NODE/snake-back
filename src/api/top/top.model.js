const mongoose = require("mongoose")

const topSchema = new mongoose.Schema(
    {
        user: [{type: mongoose.Types.ObjectId, ref: "players"}],
        date: {type: Date, required: true},
        score: {type: Number, required: true}
    },
    {
        timestamps: true,
        collection: "top"
    }
)
const Top = mongoose.model("top", topSchema)
module.exports = Top