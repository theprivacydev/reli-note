const database = require('../db/db.json');
const path = require('path');
const fs = require('fs');
const generateUniqueId = require('generate-unique-id');

require('./html-routes');

module.exports = function(app) {

    fs.readFile('db/db.json', 'utf8', function(err, data) {
        if (err) throw err;
        let notes = JSON.parse(data);
    

        // get notes
        app.get('/api/notes', function(req, res) {
            res.json(notes);
        });

        app.post('/api/notes', function(req, res){
            const newNote = {
                title: req.body.title,
                text: req.body.text,
                id: generateUniqueId({
                    length: 5,
                    useLetters: false,
                    useNumbers: true
                })
            };
            notes.push(newNote);
            noteRevision(notes);
            res.json(notes);
        // End app.post
        });

        app.get('/api/notes/:id', function(req, res) {
            res.json(notes[req.params.id]);
        });

        app.delete('/api/notes/:id', function(req, res) {
            notes = notes.filter( note => note.id !== req.params.id );
            noteRevision(notes);
            res.json(notes);
        });
        
        // End readFile
    });

    function noteRevision(notes) {

        fs.writeFile('db/db.json', JSON.stringify(notes), function(err) {
            if (err) throw err;
            return true;
        });

    };

// End export
};

