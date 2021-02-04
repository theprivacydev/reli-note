// Add express server
const express = require('express');
const path = require('path');

// Create express app
const app = express();

// Define port
const PORT = process.env.PORT || 3000;

// Middleware to parse db.json
app.use(express.urlencoded({extended:true}));

app.use(express.json());

// Import css and js files
app.use(express.static("./public"));


// Require api and html routes
require('./routing/api-routes')(app);
require('./routing/html-routes')(app);


// Invoke listen function on express app
app.listen( PORT, function(){
    console.log("App listening on PORT: ", PORT);
});
