

const fs = require('fs');

var originalNote = {
    title: "title1",
    body: "body1"
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('originalNote.json', originalNoteString);

var noteString = fs.readFileSync('originalNote.json');
var note = JSON.parse(noteString);

console.log('typeof note', typeof note);
console.log('note', note);


