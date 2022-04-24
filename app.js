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

app.use(express.static(__dirname + '/public'))

app.get('/', function (req, res){
	if (!req.session.user){
        res.redirect('/login')
    }
    else{
        res.redirect('/classlist')
	}
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/register', (req, res) => {
    res.render
})

app.get('/classlist', async (req, res) => {
    let query = req.query;
    // can't figure out how to add pattern matching for search queries (search value must be exact)
    // "result[key] = " automatically adds quotes around entire value (unable to use $regex operator)
    let conditions = Object.keys(query)
    .reduce((result, key) => {
        if (query[key]) {
            result[key] = query[key]
        }
        return result
    }, {})
    console.log(conditions)
    try{
        let find = await classCol.find(conditions) 
        // some professor values are still stored as " STAFF" instead of "STAFF"
        res.render('classlist', {data: find})
    } catch(e) {
        console.log(e.message)
    }
})

app.param('prof', function(req, res, next, value){
    console.log(`Request for professor ${value} reviews`);
    next();
})

// app.get('/reviews/:prof' async (req, res) => {

// })

app.post('/login', (req, res) => {
    
})

app.post('/register', (req, res) => {

})

app.use('*', function(req, res){
    res.writeHead(404);
    res.end(`<h1> ERROR 404. ${req.url} NOT FOUND</h1><br><br>`);
});

app.listen(3000, async () => {
    try{
		await mongoose.connect('mongodb+srv://user:YVzW36G0g0E4Zg0e@capstoneproject.25frl.mongodb.net/jsproject?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
    } catch (e) {
        console.log(e.message);
    }

    console.log("Server is running...");
})