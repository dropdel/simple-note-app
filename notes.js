// using the file system to get json of list
const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    // Loading notes
    const notes = loadNotes();

    // Check for duplicate titles
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title;
    });

    if(duplicateNotes.length === 0) {
        // Adding to note
        notes.push({
            title: title,
            body: body
        })

        // Save notes and rewrite json
        savedNotes(notes);
        console.log(chalk.green('New note added!'));
    }
    else {
        console.log(chalk.red('Note title taken!'));
    }
}

const savedNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);

    // Rewrite json file
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e) {
        return [];
    }
}

const removeNote = (title) => {
    // Get existing notes
    const notes = loadNotes();

    // Filter notes
    const newNotes = notes.filter(function(note) {
        return note.title !== title
    });

    // Check if notes removed
    if(notes.length === newNotes.length) {
        console.log(chalk.red.inverse('No note found!'));
    }
    else {
        console.log(chalk.green.inverse('Note removed!'));
    }

    // Save notes
    savedNotes(newNotes);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}