let input = [];
let isPageReloaded = true;

function validateForm(formText, date, time) {
  let currentDate = new Date();
  let selectedDateAndTime = new Date(date + " " + time);

  if (selectedDateAndTime < currentDate) {
    alert("Please select a date and time in the future");
    return false;
  } else {
    return true;
  }
}

function addNote(event) {
  event.preventDefault();
  let formText = document.getElementById("formText").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  if (!validateForm(formText, date, time)) {
    return false;
  }

  const data = {
    formText,
    date,
    time,
  };

  input.push(data);

  createTable();

  const fadeIn = document.querySelector(".note:last-child");
  fadeIn.classList.add("fadeIn");

  setTimeout(function () {
    fadeIn.classList.remove("fadeIn");
  }, 2000);

  document.getElementById("form").reset();

  saveTask();
}

function createTable() {
  const container = document.getElementById("noteContainer");
  container.innerHTML = "";

  for (let index = 0; index < input.length; index++) {
    let note = document.createElement("div");
    note.className = "col-md-3 note";

    note.innerHTML = `
        <button class="btn delete-btn btn-xs" onclick="deleteNote(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </button>
        <textarea id="noteText" readonly >${input[index].formText}</textarea><br>
        <span id="noteDate">${input[index].date}</span><br>
        <span id="noteTime">${input[index].time}</span>
        `;

    container.appendChild(note);
  }

  saveTask();
  isPageReloaded = false;
}

function saveTask() {
  localStorage.setItem("data", JSON.stringify(input));
}

function loadData() {
  const myData = JSON.parse(localStorage.getItem("data")) || [];
  return myData;
}

function initPage(note) {
  input = loadData();
  createTable();
}

function resetTask() {
  document.getElementById("form").reset();
}

function deleteNote(index) {
  input.splice(index, 1);
  createTable();
  saveTask();
}
