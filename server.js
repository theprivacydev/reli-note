// Add express server
const express = require('express');

// Create express app
const app = express();

// Define port
const PORT = process.env.PORT || 3000;

const path = require('path');

// Middleware to parse JSON
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
  

app.post("/", function(req, res){
  let firstName = req.body.fNAME;
  
});

// html routes (routes that will serve websites)
// Landing page route (how to pack all the js and css dependencies into html hint: import)
app.use( function (req, res) {
    res.sendFile(path.join( __dirname + '/public/index.html' ) );
});

// Note page route
app.get('/notes', function (req, res) {
    res.sendFile(path.join( __dirname + 'public/notes.html' ) );
});

// API routes

// post route to save note
    // ADD the new note to the db.son (figure out how to parse)

// get route to get all notes

// put route to update a note (app.put())

// delete route to delete a note







// Invoke listen function on express app
app.listen( PORT, function(){
    console.log("App listening on PORT: ", PORT);
});
