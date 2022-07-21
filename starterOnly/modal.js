function editNav() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const topNav = document.getElementById("myTopnav");
const modalbg = document.querySelector(".bground");
document.getElementById("reserve").addEventListener("submit", function (e){
  e.preventDefault();
  alert ("formulaire envoyé!");
});
const content = document.querySelector(".content");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");


// inputs
const inputs = document.querySelectorAll("#firstname, #lastname, #email, #birthdate, #quantity");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locations = document.querySelectorAll("input[type=radio]");
const checkbox1 = document.getElementById("checkbox1");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

