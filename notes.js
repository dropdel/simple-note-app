// using the file system to get json of list
const fs = require('fs');

function getNotes() {
    return "Your notes..."
}

const addNote = function(title, body) {
    // Loading notes
    const notes = loadNotes();

    // Adding to note
    notes.push({
        title: title,
        body: body
    })

    // Save notes and rewrite json
    savedNotes(notes);
}

const savedNotes = function(notes) {
    const dataJSON = JSON.stringify(notes);

    // Rewrite json file
    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e) {
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote
}