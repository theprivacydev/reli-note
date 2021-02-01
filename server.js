// Add express server
const express = require('express');

// Create express app
const app = express();

// Define port
const PORT = process.env.PORT || 3000;

// Require path
const path = require('path');

// Require database
const database = require('./db/db.json');

//Require fs
const fs = require('fs');



// Middleware to parse JSON
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


// Require api and html routes
require('./routing/api-routes')(app);
require('./routing/html-routes')(app);




// get route to get all notes

// put route to update a note (app.put())

// delete route to delete a note




// Invoke listen function on express app
app.listen( PORT, function(){
    console.log("App listening on PORT: ", PORT);
});
