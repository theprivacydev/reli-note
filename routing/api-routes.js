const database = require('../db/db.json');
const fs = require('fs');

module.exports = function(app) {
    app.get('/api/notes', function(req, res) {
        res.json(database);
    });

    app.post('/api/notes', function(req, res){
        const note = req.body;
        console.log('inside post, our note: ', note);
        fs.readFile("../db/db.json", function(err, data) {
            const currentDb = JSON.parse(data);
            console.log('inside read file, our database: ', database);
            database.push(note);
            fs.writeFileSync('../db/db.json', note);
            res.status(201)
            res.json();
            console.log(err);
          });
    });

}
