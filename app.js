// using express to display dynamic web pages
// this is the main thread

var qString = require('querystring')
let express = require('express')
let app = express()
let mongoose = require('mongoose')
let ejs = require('ejs')

let bp = require('body-parser')
let session = require('express-session');

// collection models
let classCol = require('./models/classSchema')
let reviewCol = require('./models/reviewSchema')
let userCol = require('./models/userSchema')

app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))

app.use(session({
	secret:'shhhhh',
	saveUninitialized: false,
	resave: false
}))

app.get('/', function (req, res){
	if (!req.session.user){
        res.redirect('/login')
    }
    else{
        res.redirect('/classlist')
	}
})

app.get('/login', (req, res) => {
    if (req.session.user) {
        res.redirect('/classlist')
    } else {
        res.render('login')
    }
})

app.get('/register', (req, res) => {
    if (req.session.user) {
        res.redirect('/classlist')
    } else {
        res.render('register')
    }
})

app.get('/classlist', async (req, res) => {
    if (!req.session.user) {
        res.redirect('/login')
    } else {
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
    }
})

app.param('prof', function(req, res, next, value){
    console.log(`Request for professor ${value} reviews`);
    next();
})

app.get('/reviews/:prof', async (req, res) => {
    try {
        let result = await reviewCol.find({ professor: req.params.prof })
        console.log(result)

        res.render('reviews', {data: result})
    } catch(e) {
        console.log(e.message)
    }
})

app.get('/submit', (req, res) => {
    if (!req.session.user) {
        res.redirect('/login')
    } else {
        res.render('submit')
    }
})

app.post('/login', express.urlencoded({extended:false}), async (req, res, next)=>{
	let untrusted= {user: req.body.userName, password: req.body.pass}; // need to implement genHash function for password
	console.log(untrusted.password)
    console.log(untrusted.user)
	try{
		let result = await userCol.findOne({_id: req.body.userName});
		if (untrusted.password.toString().toUpperCase()==result.password.toString().toUpperCase()){
			let trusted={name: result._id.toString()};
            req.session.user = trusted;
			res.redirect('/classlist');
		} else{
			res.redirect('/login');
		}
	} catch (err){
		next(err)		
	}
})

app.post('/register', async (req, res) => {

})

app.post('/submit', async (req, res) => { 

})

app.use('*', function(req, res){
    res.writeHead(404);
    res.end(`<h1> ERROR 404. ${req.url} NOT FOUND</h1><br><br>`);
})
app.use((err, req, res, next)=>{
	res.status(500).render('error', {message: err.message})
})

app.listen(3000, async () => {
    try{
		await mongoose.connect('mongodb+srv://user:YVzW36G0g0E4Zg0e@capstoneproject.25frl.mongodb.net/jsproject?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true })
    } catch (e) {
        console.log(e.message);
    }

    console.log("Server is running...");
})