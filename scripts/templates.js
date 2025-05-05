function getNoteTemplate(indexNote){
    return `<div class="note"> 
                <h3> ${allNotes.notesTitles[indexNote]} </h3> 
                <p>${allNotes.notes[indexNote]} </p>
                    <div>
                        <button onclick="moveNote(${indexNote}, 'notes', 'trashNotes')" class="btn">X</button>
                        <button onclick="moveNote(${indexNote}, 'notes', 'archiveNotes')" class="btn">A</button>
                    </div>
                </div>`;
}

function getArchiveNoteTemplate(indexArchiveNote){
    return `<div class="note"> 
                <h3>${allNotes.archiveNotesTitles[indexArchiveNote]} </h3>
                <p>${allNotes.archiveNotes[indexArchiveNote]}</p>
                    <div>
                        <button onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'trashNotes')" class="btn">X</button>
                        <button onclick="moveNote(${indexArchiveNote}, 'archiveNotes', 'notes')" class="btn">R</button>
                    </div>
            </div>`;
}
function getTrashNoteTemplate(indexTrashNote){
    return `<div class="note"> 
                <h3>${allNotes.trashNotesTitles[indexTrashNote]}</h3>
                <p>${allNotes.trashNotes[indexTrashNote]}</p>
                    <div>
                        <button onclick="deleteNote(${indexTrashNote})" class="btn">X</button>
                        <button onclick="moveNote(${indexTrashNote}, 'trashNotes', 'notes')"  class="btn">R</button>
                    </div>
                </div>`;
}