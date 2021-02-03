const path = require('path');
const database = require('../db/db.json');
const fs = require('fs');

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        res.json(database);
    });

    app.post('/api/notes', function(req, res){
        const note = req.body;
        console.log(note);
        fs.readFile("../db/db.json", function(err, data) {
            const currentDb = JSON.parse(data);
            currentDb.push(note);
            fs.writeFileSync('../db/db.json', note);
            res.status(201)
            res.json();
            console.log(err);
          })
    });

}
