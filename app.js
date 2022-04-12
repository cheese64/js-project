// using express to display dynamic web pages
// this is the main thread

var qString = require('querystring')
let express = require('express')
let app = express()
let mongoose = require('mongoose')
let ejs = require('ejs')

// collection models
let classCol = require('./models/classSchema')
let reviewCol = require('./models/reviewSchema')
let userCol = require('./models/userSchema')

app.set('view engine', 'ejs')

// class list, need to implement user queries
app.get('/classlist', async function (req, res) {
    try{
        let result = await classCol.find()
        console.log(result)
        res.render('classlist', {data: result})
    } catch(e) {
        console.log(e.message)
    }
})

// page not found
app.use('*', function(req, res){
    res.writeHead(404);
    res.end(`<h1> ERROR 404. ${req.url} NOT FOUND</h1><br><br>`);
});

// listening on port 3000 & connect to database
app.listen(3000, async () => {
    try{
		await mongoose.connect('mongodb+srv://user:YVzW36G0g0E4Zg0e@capstoneproject.25frl.mongodb.net/jsproject?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
    } catch (e) {
        console.log(e.message);
    }

    console.log("Server is running...");
})