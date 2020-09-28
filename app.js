var express = require("express");
var bodyParser = require("body-parser");

var app = express();


app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
app.set('views','./app/views');
app.use(express.static('./app/public'));


app.get('/', function(req, res){
    res.render('home');
})


app.listen(8080);
console.log("Servidor Online em http://127.0.1:8080");