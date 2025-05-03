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
}

function getFromLocalStorage(){
    let notesArr = JSON.parse(localStorage.getItem('notes'));

    if(notesArr == null){
        return false
    }
    notes = notesArr;
}

function renderNotes(){
   let contentRef = document.getElementById('content');
   contentRef.innerHTML="";

   for(let indexNote = 0; indexNote < notes.length; indexNote++){
        contentRef.innerHTML += getNoteTemplate(indexNote);
   }
   getFromLocalStorage()
}

function renderTrashNotes(){
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML="";
 
    for(let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++){
         trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
    getFromLocalStorage()
 }

 function renderArchiveNotes(){
    let archiveContentRef = document.getElementById('archive_content');
    archiveContentRef.innerHTML = "";

    for(let indexArchiveNote = 0; indexArchiveNote < archiveNotes.length; indexArchiveNote++){
        archiveContentRef.innerHTML += getArchiveNoteTemplate(indexArchiveNote);
   }
   getFromLocalStorage()
 }

function addNote(){
    let titleInputRef = document.getElementById('title_input');
    let titleInput = titleInputRef.value
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value

    if(titleInput <= 0){
        return alert ('Bitte geben Sie einen Titel ein')
    } else if (noteInput <= 0 ) {
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

function pushNoteToArchive(indexNote){
    let archiveNote = notes.splice(indexNote, 1);
    archiveNotes.push(archiveNote[0]);
    let archiveNoteTitle = notesTitles.splice(indexNote, 1);
    archiveNotesTitles.push(archiveNoteTitle[0]);
    saveToLocalStorage()
    renderNotes();
    renderArchiveNotes()
    renderTrashNotes();
}

function pushNoteToTrash(indexNote, indexArchiveNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    let trashArchiveNote = archiveNotes.splice(indexArchiveNote, 1);
    trashArchiveNotes.push(trashArchiveNote[0]);
    let trashArchiveNoteTitles = archiveNotesTitles.splice(indexArchiveNote, 1);
    trashArchiveNoteTitles.push(trashArchiveNoteTitles[0]);
    saveToLocalStorage()
    renderNotes();
    renderTrashNotes();
    renderArchiveNotes()
}

function deleteNote(indexTrashNote){
    trashNotes.splice(indexTrashNote, 1);
    saveToLocalStorage()
    renderNotes();
    renderTrashNotes();
}




