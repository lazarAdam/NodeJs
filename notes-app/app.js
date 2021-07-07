// import yargs from 'yargs'
// import { hideBin } from 'yargs/helpers'
//
// // import  val from 'validator/lib/isEmail';
// // import isEmail from 'validator/lib/isEmail';
// import  validator from 'validator';

const validator = require('validator')
const ya = require('yargs')
const chalk = require('chalk')
const notes = require('./notes')


ya.version('1.1.0')

ya.command({

    command: "add",
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string',

        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)
    }
})

ya.command({

    command: "remove",
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },

    handler: (argv) => {
        notes.removeNote(argv.title)

    }
})


ya.command({

    command: "list",
    describe: 'list notes',
    handler: () => {

        notes.listNotes()
    }
})

ya.command({

    command: "read",
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler: (argv) => {
       notes.readNote(argv.title)
    }
})


ya.parse()

console.log('app is running, type in --help to see options and commands')