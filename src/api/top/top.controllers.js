const Top = require("./top.model")

const getTops = async (req, res, next) => {
    try {
        const tops = await Top.find()

        return res.json(tops)
    } catch (error) {
        return next(error)
    }
}

module.exports = {
    getTops
}