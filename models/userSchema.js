let mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    {
        _id: String,
        name: String,
        password: String,
        rank: String,
        schedule: [Number]
    }
)

const userCol = mongoose.model('User', userSchema)
module.exports = userCol