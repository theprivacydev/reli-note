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
  

// Html routes 
// Landing page route 
app.get('/', function (req, res) {
    res.sendFile(path.join( __dirname + '/public/index.html' ) );
});

// Note page
app.get('/notes', function (req, res) {
    res.sendFile(path.join( __dirname + '/public/notes.html' ) );
});

app.use(function(req, res){
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n', database)
    res.send()
});

// API routes
app.get('/api/notes', function(req, res) {
    res.json(database);

});


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
