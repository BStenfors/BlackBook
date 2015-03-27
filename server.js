'use strict';

var express = require('express');
var port = process.env.PORT || 9001;
var app = express();
var path = require('path');
var exphbs = require('express-handlebars');
var serveStatic = require('serve-static');

// view engine setup
var viewsPath = path.join(__dirname, '/server/views/');
console.log(viewsPath);
app.set('views', viewsPath);

//exphbs.registerPartials(__dirname + '/server/views/partials');
app.set('view engine', 'hbs');
app.engine('hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: 'server/views/layouts',
    partialsDir: 'server/views/partials'
}));

app.use(serveStatic(__dirname + '/public/'));
app.get('/', function (req, res) {
    res.render('index');
});

app.listen(port, function(){
    console.log('Express server listening on port ' + port);
});