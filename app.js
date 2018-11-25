//REQUIRED
var express = require('express');
var app = express();
var path = require('path')
app.set('view engine', 'ejs');

app.listen(3000);
console.log('listening on port 3000')

//use public folder
app.use(express.static(path.join(__dirname, 'public')));

//home page
app.get('/', function(req, res) {
	res.render('index');
});


//ROUTES
//sign up page
app.get('/signup', function(req, res) {
	res.render('signup');
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