//import express
let express = require('express');

//initialize the app
let app = express();

let session = require('express-session');
app.use(session({
    secret:'secret secret',
    resave: false,
    saveUninitialized : true
}));

app.use(express.urlencoded({extended:true}));

//default message
/*
app.get('/',(req,res)=>{
    res.send('hello World !');
});*/

//initialisation cookie
let cookieParser = require('cookie-parser');
app.use(cookieParser());

//router
let router = require("./routes");
app.use('/',router);

//defini des fichiers static (image, css, ect)
app.use(express.static("public"));

//launch app to listen to specified port
app.listen(80,function(){
    console.log('Running on port 3000')
});