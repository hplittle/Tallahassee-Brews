//REQUIRED
var express = require('express');
var app = express();
var path = require('path');
var firebase = require('firebase');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const multer = require('multer');
let upload = multer({storage: multer.memoryStorage()});

const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://tallahassee-brews.firebaseio.com"
});

app.set('view engine', 'ejs');

app.listen(3000);
console.log('listening on port 3000')


//use public folder
app.use(express.static(path.join(__dirname, 'public')));

//home page
app.get('/', function(req, res) {
	res.render('index');
});

//routes folder for JS files
/*const {create, login} = require('./routes/user');
app.get('/createuser', create);
app.get('/login', login);*/


//ROUTES
//sign up page
app.get('/signup', function(req, res) {
	res.render('signup');
});
//dashboard page
app.get('/dashboard', function(req, res) {
	res.render('dashboard');
});
//master brewery page
app.get('/master', function(req, res) {
	res.render('master');
});
//proof page
app.get('/proof', function(req, res) {
	res.render('proof');
});
//grasslands page
app.get('/grasslands', function(req, res) {
	res.render('grasslands');
});
//deep page
app.get('/deep', function(req, res) {
	res.render('deep');
});
//ology page
app.get('/ology', function(req, res) {
	res.render('ology');
});

app.post('/process', multer().none(), function (req, res) {

    // Get a reference to the object "examples" in Firebase
    const examples = db.ref('examples');
    //Push the form data as a new record/object inside the examples object
    examples.push(req.body);
    //Reply with a generic JSON response
    res.json(JSON.stringify({message: 'Done!'}));
});
