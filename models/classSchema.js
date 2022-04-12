let mongoose = require('mongoose')

const classSchema = new mongoose.Schema(
    {
        _id: Number,
        school: String,
        course: String,
        professor: String,
        day: String,
        start: Number,
        end: Number,
        bldg: String,
        room: String
      }
)

const classCol = mongoose.model('Class', classSchema)
module.exports = classCol