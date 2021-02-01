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


// Middleware to parse JSON
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());


// Require html & api routes
require('./routing/html-routes')(app);
require('./routing/api-routes')(app);

// post route to save note
    // ADD the new note to the db.son (figure out how to parse)
    app.post("/", function(req, res){
        let firstName = req.body.fNAME;
        
      });

// get route to get all notes

// put route to update a note (app.put())

// delete route to delete a note







// Invoke listen function on express app
app.listen( PORT, function(){
    console.log("App listening on PORT: ", PORT);
});
