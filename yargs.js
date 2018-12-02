
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of Note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    describe: 'Body of Note',
    demand: true,
    alias: 'b'
};

console.log('regular inputs', process.argv);
console.log('yargs input', yargs.argv);


var arg = process.argv[2];
var argv = yargs
    .command('add', 'Add a new note', {
        title:titleOptions,
        body:bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'read a note', {
        title:titleOptions
    })
    .command('remove', 'remove a note', {
        title:titleOptions
    })
    .help()
    .argv;
var yargv1 = argv._[0];
var yargv2 = argv._[1];

console.log('arg' , arg);
console.log('argv' , argv);

console.log('yargv1' , yargv1);
console.log('yargv2' , yargv2);

if(arg === 'add'){
    
    console.log("argument add");
    var note = notes.addNote(argv.title, argv.body);
    if(note){
        console.log("Note Created!", JSON.stringify(note));
    }else{
        console.log("Duplicate found, Note not created!")
    }

}else if(arg === 'remove'){
    
    console.log("argument remove");
    var removed = notes.remove(argv.title);
    if(removed){
        console.log(" Removed! ");
    }else{
        console.log("Not Removed! ");
    }

}else if(arg === 'list'){
    
    console.log("argument list");
    console.log(JSON.stringify(notes.getAll()));

}else if(arg === 'read'){

    console.log("argument read");
    console.log(JSON.stringify(notes.getNote(argv.title)));

}else {

    console.log(" un-recognized input!")

}

