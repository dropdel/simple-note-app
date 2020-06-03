const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');


// Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    building: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        getNotes.addNote(argv.title, argv.body);
    }
})

// Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    building: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv) {
        getNotes.removeNote(argv.title);
    }
})

// add note, remove note, read note, list note
// you will add an argument and option at the command line...
yargs.parse()