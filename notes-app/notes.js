function readNote(title) {

    const foundNote = loadNotes().find(note => {
        return note.title === title
    })

    if (foundNote){

        console.log(chalk.green.inverse(`note title:${foundNote.title}\tNote body: ${foundNote.body}`))
    }else{
        console.log(chalk.red.inverse('no matching note was found!'))
    }


}

const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {

    return ' my notes'
}


const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicatedNotes = notes.find(note => {
        return note.title === title
    })

    if (!duplicatedNotes) {

        notes.push({
            title: title,
            body: body,
        })

        console.log('note was added')
    } else {
        console.log('note title taken!')
    }


    saveNotes(notes)
}

const loadNotes = function () {

    try {

        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    } catch (e) {
        return []
    }


}

const saveNotes = (notes) => {

    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

function removeNote(title) {

    const loadedNotes = loadNotes()

    const updatedNotes = loadedNotes.filter((note) => {
        return note.title !== title
    })


    if (loadedNotes.length === updatedNotes.length) {
        console.log(chalk.red.inverse(`no matching note with title:${title} was found`))
    } else {

        saveNotes(updatedNotes)


        console.log(chalk.green.inverse(`note titled: ${title}  removed!`))
    }

}


function listNotes() {

    loadNotes().forEach(note => {
        console.log(chalk.blueBright(`note title:${note.title}\tNote body: ${note.body}`))
    })

}



module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote:readNote
}