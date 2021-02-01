const path = require('path');
const database = require('../db/db.json')

module.exports = function(app) {
    
    app.get('/api/notes', function(req, res) {
        res.json(database);
    
    });

}
