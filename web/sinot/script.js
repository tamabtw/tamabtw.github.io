// Initialize notes array
var notes = [];

// Load notes from local storage on page load
window.onload = function() {
  loadNotes();
};

// Function to create a new note
function createNote() {
  var noteInput = document.getElementById("note-input");
  var noteText = noteInput.value.trim();

  if (noteText !== "") {
    var note = {
      id: Date.now(),
      text: noteText
    };

    notes.push(note);
    saveNotesToLocalStorage();
    renderNotes();

    noteInput.value = "";
  }
}

// Function to update a note
function updateNote(id) {
  var updatedText = prompt("Update note:", "");

  if (updatedText !== null && updatedText.trim() !== "") {
    var note = getNoteById(id);

    if (note) {
      note.text = updatedText.trim();
      saveNotesToLocalStorage();
      renderNotes();
    }
  }
}

// Function to delete a note
function deleteNote(id) {
  var confirmation = confirm("Are you sure you want to delete this note?");

  if (confirmation) {
    notes = notes.filter(function(note) {
      return note.id !== id;
    });

    saveNotesToLocalStorage();
    renderNotes();
  }
}

// Function to save notes to local storage
function saveNotesToLocalStorage() {
  localStorage.setItem("notes", JSON.stringify(notes));
}

// Function to load notes from local storage
function loadNotes() {
  var storedNotes = localStorage.getItem("notes");

  if (storedNotes !== null) {
    notes = JSON.parse(storedNotes);
    renderNotes();
  }
}

// Function to render notes on the screen
function renderNotes() {
  var notesContainer = document.getElementById("notes-container");
  notesContainer.innerHTML = "";

  for (var i = 0; i < notes.length; i++) {
    var note = notes[i];

    var noteElement = document.createElement("div");
    noteElement.className = "note";
    noteElement.innerHTML = `
      <p>${note.text}</p>
      <button onclick="updateNote(${note.id})">Edit</button>
      <button class="delete" onclick="deleteNote(${note.id})">Delete</button>
    `;

    notesContainer.appendChild(noteElement);
  }
}

// Function to retrieve a note by its ID
function getNoteById(id) {
  return notes.find(function(note) {
    return note.id === id;
  });
}
