const database = require('../db/db.json');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

module.exports = function(app) {

        fs.readFile("../db/db.json", function(err, data) {

            // get notes
            app.get('/api/notes', function(req, res) {
                res.json(database);
            });

            app.post('/api/notes', function(req, res){
                const note = req.body;
                console.log('inside post, our note: ', note);
                res.json(data);
                console.log('inside post, our database: ', database);
                database.push(note);
                fs.writeFileSync('../db/db.json', note);
                res.status(201)
                res.json(true);
                console.log(err);
            // End app.post
            });



            // End readFile
          });
}

