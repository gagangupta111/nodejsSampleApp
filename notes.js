const fs = require('fs');

const fileName = 'notes-data.json';

console.log(" Starting nodes.js ")

var fetchNotes = () => {

    try{

        var notesString = fs.readFileSync(fileName);
        return JSON.parse(notesString);

    }catch(e){
        return [];
    }

}

var saveNotes = (notes) => {

    fs.writeFileSync(fileName, JSON.stringify(notes));

}

var addNote = (title, body) => {

    console.log('Adding note', title, body);
    
    var notesArray = fetchNotes();
    var note = {
        title: title,
        body: body
    }

    var duplicateNotes = notesArray.filter((note) => note.title === title);

    if(duplicateNotes.length === 0){
        notesArray.push(note);
        saveNotes(notesArray);
    }else{
        console.log("Duplicates found!");
    }
    
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

