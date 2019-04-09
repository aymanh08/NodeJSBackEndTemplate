// Variables
var express = require('express')
var app = express()
var port = process.env.PORT || 3000;

// Defining routes
//var <route variable> = require(<route path>);


//Configuring the variables

//Base route
app.get('/', function(req, res){
    res.send('Sucess')
})

//Connecting routes
//app.use(<route path>, <route variable>);

app.listen(port, function(){
    console.log('Server listening on ', port);
})



