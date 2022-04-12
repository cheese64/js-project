let mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
    
)

const userCol = mongoose.model('User', userSchema)
module.exports = userCol