const path = require('path');
const fs = require('fs');

module.exports = function(app) {
    
    // Landing page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/index.html'));
    });

    // Note page
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname, '/../public/notes.html' ));
    });

}
