// let obj = {
//   name: 'Vitaly'
// };
// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// const personString = '{"name": "Vitaly", "age": 27}';
// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

let originalNote = {
  title: 'Some title',
  body: 'Some body'
};

// write json representation of note to the file
let originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('playground/notes.json', originalNoteString);

// read json representation of previously written note from the file
let noteString = fs.readFileSync('notes.json');
// parse it from json to javascript object
let note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);