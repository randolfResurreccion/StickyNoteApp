
// Main Buttons - User Nav
const post = document.querySelector('.post-it');
const clearBoard = document.querySelector('.clear-board');

// Modal DOM
const overlay = document.querySelector('.overlay');
const modalForm = document.querySelector('.modal-form');
const modalClose = document.querySelector('.modal-close');
const submit = document.querySelector("#submit");
const warning = document.querySelector(".warning")

// Form
const form = document.querySelector("#form");
const displaySection = document.querySelector("#display-section");

// Global Variable
let colorArr = ["#fff740", "#cee2d7", "#73cac4", "#fff9a5", "#f9b8bc", "#b0cdeb"];
let randomColor;
let counter = localStorage.length;

const userInput = document.querySelector("#user-input");
// const newNote = document.querySelector(".new-note");

// =============
// Functions 
// =============


const addNote = (e) => {

    const data = userInput.value;
    console.log(e)
    e.preventDefault();

    // validate
    if ((userInput.value.length < 1 || userInput.value.trim() == "")) {
        show(warning);
        return false;
    };

    form.reset();
    hide(overlay);
    hide(modalForm);
    hide(warning);

    randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    setColor(userInput, randomColor);

    let newNote = document.createElement("div");
    newNote.classList.add('new-note');
    setColor(newNote, randomColor);

    let newNotePtag = document.createElement("p");
    newNotePtag.innerHTML = data;

    newNote.append(newNotePtag);
    displaySection.append(newNote);

    // // LOCAL STORAGE
    localStorage.setItem(`data${counter}`, newNote.innerHTML);
    counter++;
}

// Clear Board Function
const clearBoradFunc = () => {
    localStorage.clear();
    $('.new-note').remove();

    // make sure that the counter value reset when we clear the board
    counter = localStorage.length;
}

// pop up function
const openNote = () => {

    randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    show(overlay);
    show(modalForm);
    setColor(userInput, randomColor)
}

// hide element
const hide = el => el.style.display = "none";

// show element
const show = el => el.style.display = "block"

// change background-color
const setColor = (el, randomColor) => el.style.backgroundColor = randomColor;


// ================
//  Local Storage
// ================

for (let i = 0; i < localStorage.length; i++) {
    let data = `data${i}`;
    data = localStorage.getItem(data);

    let newNote = document.createElement("div");
    newNote.classList.add('new-note');

    randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    setColor(newNote, randomColor);

    let newNotePtag = document.createElement("p");
    newNotePtag.innerHTML = data;

    newNote.append(newNotePtag);

    displaySection.append(newNote);
}


// =====================
// Main Event Listener
// =====================

document.addEventListener("DOMContentLoaded", () => {

    post.addEventListener("click", openNote, false);
    submit.addEventListener("click", addNote, false);
    clearBoard.addEventListener("click", clearBoradFunc, false);

    modalClose.addEventListener("click", function (e) {
        e.preventDefault();
        form.reset();
        hide(overlay);
        hide(modalForm);
        hide(warning);
    });

});






