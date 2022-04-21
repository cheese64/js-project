let mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        professor: String,
        course: String,
        difficulty: Number,
        take_again: String,
        grade: String,
        rating: Number
    }
)
    
    const reviewCol = mongoose.model('Review', reviewSchema)
    module.exports = reviewCol