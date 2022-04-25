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

userSchema.path('_id').required(true, 'Please enter a username')
userSchema.path('password').required(true, 'Please enter a password')

const userCol = mongoose.model('User', userSchema)
module.exports = userCol