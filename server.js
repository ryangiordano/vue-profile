var express = require('express');
var app = express();
var path = require('path');

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to html
app.set('view engine', 'hbs');
// make express look in the public directory for assets (css/js/img)
// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname+'/dist'));
// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});
// all other routes are handled by vue
app.get('/*', function(req, res) {
    res.render('index');
});
app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
