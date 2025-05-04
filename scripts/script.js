let notesTitles = ['ToDo', 'Aufgabe'];
let notes = ['Rasen mähen', 'Einkaufen'];

let trashNotesTitles = [];
let trashNotes = [];

let trashArchiveNotesTitles = [];
let trashArchiveNotes = [];

let archiveNotesTitles = [];
let archiveNotes = [];

//rendering notes

function saveToLocalStorage(){
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
    localStorage.setItem('notesTitles', JSON.stringify(notesTitles));
    localStorage.setItem('trashNotesTitles', JSON.stringify(trashNotesTitles));
}

function getFromLocalStorage(){
    let notesArr = JSON.parse(localStorage.getItem('notes'));
    let trashNotesArr = JSON.parse(localStorage.getItem('trashNotes'));
    let notesTitlesArr = JSON.parse(localStorage.getItem('notesTitles'));
    let trashNotesTitlesArr = JSON.parse(localStorage.getItem('trashNotesTitles'));

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
}

function renderNotes(){
    getFromLocalStorage();

    let contentRef = document.getElementById('content');
    contentRef.innerHTML="";

    for(let indexNote = 0; indexNote < notes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function renderTrashNotes(){
    getFromLocalStorage();

    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML= "";
 
    for(let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++){
         trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
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

//deleting notes



function pushNoteToTrash(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);

    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);

    saveToLocalStorage()
    renderNotes();
    renderTrashNotes();
    

}

function deleteNote(indexTrashNote){

    trashNotes.splice(indexTrashNote, 1);
    trashNotesTitles.splice(indexTrashNote, 1);

    saveToLocalStorage()
    renderTrashNotes();
}




