let input = document.getElementById("note-input");
let addBtn = document.getElementById("add-note-btn");
let notesList = document.getElementById("notes-list");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function renderE() {
  notesList.innerHTML = "";

  notes.forEach((note, index) => {
    const element = document.createElement("div");
    element.textContent = note;

    notesList.appendChild(element);
  });
}

// Page load par notes show karo
renderE();

addBtn.addEventListener("click", () => {
  let inputV = input.value.trim();   // trim important

  if (inputV === "") return;         // empty note stop

  notes.push(inputV);

  localStorage.setItem("notes", JSON.stringify(notes));

  input.value = "";                  // input clear
  renderE();
});
