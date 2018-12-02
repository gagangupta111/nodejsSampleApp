const fs = require('fs');

console.log(" Starting nodes.js ")

var addNote = (title, body) => {

    console.log('Adding note', title, body);
    
    var notesArray = [];
    var note = {
        title: title,
        body: body
    }

    var notesString = fs.readFileSync('notes-data.json');
    notesArray = JSON.parse(notesString);

    notesArray.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notesArray));

}

var getAll = () => {
    console.log('Getting all notes');
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var remove = (title) => {
    console.log('Removing note', title);
}

module.exports = {
    addNote: addNote,
    getAll: getAll,
    getNote: getNote,
    remove: remove
}

