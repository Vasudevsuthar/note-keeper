const noteText = document.getElementById("noteText");
const addNoteButton = document.getElementById("addNoteBtn");
const notesContainer = document.getElementById("notesContainer");

let notes = [];

window.onload = function() {
    const saveNotes = localStorage.getItem("notes");
    if(saveNotes){
        notes = JSON.parse(saveNotes);
        renderNotes();
    }
};

addNoteButton.addEventListener("click", () => {
    const text = noteText.value.trim();
    if(text !== ""){
        notes.push(text);
        noteText.value = "";
        saveNotes();
        renderNotes();
    }
});

function renderNotes() {
    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        const noteDiv = document.createElement("div");
        noteDiv.className = 'note';
        noteDiv.innerHTML = note;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerText = "x";
        deleteBtn.onclick = () => deleteNote(index);

        noteDiv.appendChild(deleteBtn);
        notesContainer.appendChild(noteDiv);
    });
}

function deleteNote(index) {
    notes.splice(index, 1);
    saveNotes();
    renderNotes();
  }

  function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  