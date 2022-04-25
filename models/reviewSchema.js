let mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        professor: String,
        course: String,
        difficulty: {
            type: Number, 
            validate: {
                validator: function(){
                    return (this.difficulty>1 && this.difficulty<=5)
                }, 
                message: "Please use a 1-5 rating scale"
            }
        },
        take_again: String,
        grade: String,
        rating: {
            type: Number, 
            validate: {
                validator: function(){
                    return (this.rating>1 && this.rating<=5)
                }, 
                message: "Please use a 1-5 rating scale"
            }
        }
    }
)

reviewSchema.path('professor').required(true, 'You must enter an professor to review')
reviewSchema.path('difficulty').required(true, 'You must rate the difficulty')
reviewSchema.path('take_again').required(true, 'You must specify whether you would take the professor again')
reviewSchema.path('rating').required(true, 'You must enter a rating for the professor')

const reviewCol = mongoose.model('Review', reviewSchema)
module.exports = reviewCol