const path = require('path');

module.exports = function(app) {
    
    // Landing page
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/index.html'));
    });

    // Note page
    app.get('/notes', function (req, res) {
        res.sendFile(path.join(__dirname + '/../public/notes.html' ));
    });

}
