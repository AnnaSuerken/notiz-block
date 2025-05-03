function getNoteTemplate(indexNote){
    return `<div class="note"> 
                <h3> ${notesTitles[indexNote]} </h3> 
                <p>${notes[indexNote]} </p>
                    <div>
                        <button onclick="pushNoteToTrash(${indexNote})" class="btn">X</button>
                        <button onclick="pushNoteToArchive(${indexNote})" class="btn">A</button>
                    </div>
                </div>`;
}

function getArchiveNoteTemplate(indexArchiveNote){
    return `<div class="note"> 
                <h3>${archiveNotesTitles[indexArchiveNote]} </h3>
                <p>${archiveNotes[indexArchiveNote]}</p>
                    <div>
                        <button onclick="pushNoteToTrash(${indexArchiveNote})" class="btn">X</button>
                    </div>
            </div>`;
}
function getTrashNoteTemplate(indexTrashNote){
    return `<div class="note"> 
                <h3>${trashNotesTitles[indexTrashNote]} </h3>
                <p>${trashNotes[indexTrashNote]}</p>
                    <div>
                        <button onclick="deleteNote(${indexTrashNote})" class="btn">X</button>
                    </div>
                </div>`;
}