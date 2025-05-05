let notesTitles = ['ToDo', 'Aufgabe'];
let notes = ['Rasen mähen', 'Einkaufen'];

let trashNotesTitles = [];
let trashNotes = [];

let archiveNotesTitles = [];
let archiveNotes = [];

let allNotes = {
    'notesTitles' : ['ToDo', 'Aufgabe'],
    'notes' : ['Rasen mähen', 'Einkaufen'],
    'trashNotesTitles' : [],
    'trashNotes' : [],
    'archiveNotesTitles' : [],
    'archiveNotes' : [],
}
//rendering notes

function saveToLocalStorage(){
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));

    localStorage.setItem('notesTitles', JSON.stringify(notesTitles));
    localStorage.setItem('trashNotesTitles', JSON.stringify(trashNotesTitles));

    localStorage.setItem('archiveNotesTitles', JSON.stringify(archiveNotesTitles));
    localStorage.setItem('archiveNotes', JSON.stringify(archiveNotes));
}

function getFromLocalStorage(){
    let notesArr = JSON.parse(localStorage.getItem('notes'));
    let notesTitlesArr = JSON.parse(localStorage.getItem('notesTitles'));

    let trashNotesArr = JSON.parse(localStorage.getItem('trashNotes'));
    let trashNotesTitlesArr = JSON.parse(localStorage.getItem('trashNotesTitles'));

    let archiveNotesArr = JSON.parse(localStorage.getItem('archiveNotes'));
    let archiveNotesTitlesArr = JSON.parse(localStorage.getItem('archiveNotesTitles'));
    

    if (notesArr === null) {
        notes = notesArr;
    }
    if (trashNotesArr === null) {
        trashNotes = trashNotesArr;
    }
    if (notesTitlesArr === null) {
        notesTitles = notesTitlesArr;
    }
    if (trashNotesTitlesArr === null) {
        trashNotesTitles = trashNotesTitlesArr;
    }
    if (archiveNotesArr === null) {
        archiveNotes = archiveNotesArr;
    }
    if (archiveNotesTitlesArr === null) {
        archiveNotesTitles = archiveNotesTitlesArr;
    }
}

function renderAllNotes () {
    renderNotes();
    renderArchiveNotes();
    renderTrashNotes();
}

function renderNotes(){
    getFromLocalStorage();

    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for(let indexNote = 0; indexNote < allNotes.notes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes(){
    getFromLocalStorage();

    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";
 
    for(let indexTrashNote = 0; indexTrashNote < allNotes.trashNotes.length; indexTrashNote++){
         trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
 }

 function renderArchiveNotes(){
    getFromLocalStorage();

    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = "";
 
    for(let indexArchiveNote = 0; indexArchiveNote < allNotes.archiveNotes.length; indexArchiveNote++){
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
    }
 }


function addNote(){
    let titleInputRef = document.getElementById('title_input');
    let titleInput = titleInputRef.value

    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value

    if(titleInput === 0){
        return alert ('Bitte geben Sie einen Titel ein')
    } else if (noteInput === 0 ) {
        return alert ('Bitte geben Sie eine Notiz ein')
    }

    notesTitles.push(titleInput);
    titleInputRef.value = "";

    notes.push(noteInput);
    noteInputRef.value = "";

    saveToLocalStorage();
    renderNotes();
}

function moveNote(indexNote, startKey, destinationKey){
    let note = allNotes[startKey].splice(indexNote, 1);
    allNotes[destinationKey].push(note[0]);

    let noteTitle = allNotes[startKey + "Titles"].splice(indexNote, 1);
    allNotes[destinationKey + "Titles"].push(noteTitle[0]);

    saveToLocalStorage();
    renderAllNotes();
}

//deleting notes


function deleteNote(indexTrashNote){

    allNotes.trashNotes.splice(indexTrashNote, 1);
    allNotes.trashNotesTitles.splice(indexTrashNote, 1);

    saveToLocalStorage()
    renderTrashNotes();
}




