const fs = require('fs');

/************************** CRUD OPERATIONS WITH NOTES (FILE SYSTEM) *********************/

/******************** PRIVATE FUNCTIONS ***********************/

// Fetch all existing notes from a file on the disk
const fetchNotes = () => {
    // check for file existence
    if (fs.existsSync('notes-data.json')) {
        let notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } else {
        return [];
    }
};

// Save array of notes to the file on the disk
const saveNotes = (notes) => {
    // write array of notes to the file
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

/******************** EXPORTED FUNCTIONS ***********************/

// Add new note to the file on the disk
const addNote = (title, body) => {
    let notes = fetchNotes();
    let note = {
        title,
        body
    };
    // check for duplicate note's titles
    let duplicateNotes = notes.filter(note => note.title === title);
    // if there isn't duplicates, add new note and save updated array of notes to the disk
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

// Retrieve all notes from the file on the disk as array
const getAll = () => {
    return fetchNotes();
};

// Retrieve a note by it's title property
const getNote = (title) => {
    const notes = fetchNotes();
    const foundNotes = notes.filter(note => note.title === title);
    return foundNotes[0];
};


// Remove a note by it's title property, return boolean result of operation
const removeNote = (title) => {
    // fetch notes
    let notes = fetchNotes();
    // filter notes, removing the one with title of arguments
    const filteredNotes = notes.filter(note => note.title !== title);
    // save new notes array
    saveNotes(filteredNotes);

    return notes.length !== filteredNotes.length;
};

// Log information about given note to the console
const logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`Title: "${note.title}"`);
    console.log(`Body: "${note.body}"`);
};

/******************* EXPORTS PUBLIC FUNCTIONS ***************/

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};