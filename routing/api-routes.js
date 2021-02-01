const path = require('path');
const database = require('../db/db.json');
const fs = require('fs');

module.exports = function(app) {
    
    app.get('/api/notes', function(req, res) {
        res.json(database);
    
    });

    app.post('/api/notes', function(req, res){
        const note = req.body;
        database.push(req.body);
        res.json();
    });

}
