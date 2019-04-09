// Importing dependencies
var express = require('express')
var bodyParser = require('body-parser');
var databaseHelper = require('../helpers/databaseHelper');
var database = require('../helpers/dateHelper');

//Configuring depencies
var router = express.Router();
var parseJSON = bodyParser.json();
var parseUrlEncoded = bodyParser.urlencoded({ extended: false });

//Set universal headers
router.use((req, res, next) => {
    //res.setHeader(<header key>, <header value>);
    next();
})

// define the home page route
router.route("/")

    //create
    .post(parseUrlEncoded, parseJSON, (req, res, next) => {

        //next() or res.send()
    })

    //read
    .get(parseUrlEncoded, parseJSON, (req, res, next) => {

        //next() or res.send()
    })

    //update
    .put(parseUrlEncoded, parseJSON, (req, res, next) => {

        //next() or res.send()
    })

    //delete
    .delete(parseUrlEncoded, parseJSON, (req, res, next) => {

        //next() or res.send()
    })


// Error handler
router.use(function (err, req, res, next) {
    //Handle Error
})

module.exports = router
