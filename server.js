// Add express server
const express = require('express');

// Create express app
const app = express();

// Define port
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));

app.use(express.json());


// Require api and html routes
require('./routing/api-routes')(app);
require('./routing/html-routes')(app);

// Import css and js files
app.use(express.static("./public"));

// get route to get all notes

// put route to update a note (app.put())

// delete route to delete a note




// Invoke listen function on express app
app.listen( PORT, function(){
    console.log("App listening on PORT: ", PORT);
});
