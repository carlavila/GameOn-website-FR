// NAVBAR
function editNav() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const modalCross = document.querySelector(".close");
const formIsValid = document.getElementById("formIsValid");
const btnCloseModalFormIsValid = document.querySelector(".btn__closeModal");


/* MODAL FUNCTION */
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal event
modalCross.addEventListener("click", closeModal);
// close modal form CROSS
function closeModal() {
  modalbg.style.display = "none";
  /* Modal formIsValid */
  formIsValid.style.display = "none";
  /* reload for empty form */
  document.location.reload();
}
//Close modal form is valid BTN
btnCloseModalFormIsValid.addEventListener("click", closeModalFormIsValid);
function closeModalFormIsValid() {
  formIsValid.style.display = "none";
  modalbg.style.display = "none";
  /* reload for empty form */
  document.location.reload();
}

/* FORM */
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthdate = document.getElementById("birthdate");
const partEvent = document.getElementById("quantity");
const radioLocation = document.getElementsByName("location");
const checkCondition = document.getElementById("checkbox1");

/* FUNCTION FOR ALL EL FORM */
function formFirstName() {
  const errorFirstName = document.getElementById("error_first_name");
  const regexLetters = new RegExp(/^[A-Za-z-]+$/);
  if (!firstName.value) {
    errorFirstName.innerHTML = "Veuillez renseigner votre prénom";
    errorFirstName.style.display = "block";
    return false;
  } else if (firstName.value.length < 2) {
    errorFirstName.innerHTML = "Veuillez renseigner 2 caractères au minimumn.";
    errorFirstName.style.display = "block";
    return false;
  } else if (!regexLetters.test(firstName.value)) {
    errorFirstName.innerHTML = "Seul les caractéres alphanumériques sont acceptés, utilisé (-) pour les prénoms composés.";
    errorFirstName.style.display = "block";
    return false
  } else {
    errorFirstName.style.display = "none";
    return true;
  }
}
function formLastName() {
  const errorLastName = document.getElementById("error_last_name");
  const regexLetters = new RegExp(/^[A-Za-z-]+$/);
  if (!lastName.value) {
    errorLastName.innerHTML = "Veuillez renseigner votre nom";
    errorLastName.style.display = "block";
    return false;
  } else if (lastName.value.length < 2) {
    errorLastName.innerHTML = "Veuillez renseigner 2 caractères au minimum.";
    errorLastName.style.display = "block";
    return false;
  } else if (!regexLetters.test(lastName.value)) {
    errorLastName.innerHTML = "Seul les caractéres alphanumériques sont acceptés, utilisé (-) pour les noms composés.";
    errorLastName.style.display = "block";
    return false
  }else {
    errorLastName.style.display = "none";
    return true;
  }
}
function formEmail() {
  const errorEmail = document.getElementById("error_email");
  const regexEmail = new RegExp(/\S+@\S+\.\S+/);
  if (!email.value) {
    errorEmail.innerHTML = "Veuillez renseigner votre email";
    errorEmail.style.display = "block";
    return false;
  } else if (!regexEmail.test(email.value)) {
    errorEmail.innerHTML = "Veuillez renseigner un email valide.";
    errorEmail.style.display = "block";
    return false;
  } else {
    errorEmail.style.display = "none";
    return true;
  }
}
function formBirthDate() {
  const errorBirthdate = document.getElementById("error_birthdate");
  if (!birthdate.value) {
    errorBirthdate.innerHTML = "Veuillez renseigner votre date d'anniversaire";
    errorBirthdate.style.display = "block";
    return false;
  } else if (birthdate.type !== "date") {
    errorBirthdate.innerHTML = "Veuillez renseigner une date valide.";
    errorBirthdate.style.display = "block";
  } else {
    errorBirthdate.style.display = "none";
    return true;
  }
}
function formPartEvent() {
  const errorPartEvent = document.getElementById("error_partevent");
  const regexPartEvent = new RegExp("^[0-9][0-9]?$|^99$");
  if (!partEvent.value) {
    errorPartEvent.innerHTML =
      "Veuillez renseigner votre nombre de participation";
    errorPartEvent.style.display = "block";
    return false;
  } else if (!regexPartEvent.test(partEvent.value)) {
    errorPartEvent.innerHTML = "Veuillez renseigner un nombre entre 0 et 99.";
    errorPartEvent.style.display = "block";
    return false;
  } else {
    errorPartEvent.style.display = "none";
    return true;
  }
}
function formCheckCondition() {
  const errorCheckCondition = document.getElementById("error_checkCondition");
  if (!checkCondition.checked) {
    errorCheckCondition.innerHTML =
      "Veuillez accepter les conditions d'utilisation.";
    errorCheckCondition.style.display = "block";
    return false;
  } else {
    errorCheckCondition.style.display = "none";
    return true;
  }
}
function formRadioLocation() {
  const errorRadioLocation = document.getElementById("error_radioLocation");
  const result = Array.from(radioLocation).filter(
    (radio) => radio.checked === true
  );
  if (result.length > 0) {
    errorRadioLocation.style.display = "none";
    return true;
  } else {
    errorRadioLocation.innerHTML = "Veuillez selectionner une ville.";
    errorRadioLocation.style.display = "block";
    return false;
  }
}
/* FORM */
const form_registration = document.getElementById("registration");
/* EVENT SUBMIT FORM */
form_registration.addEventListener("submit", function (e) {
  e.preventDefault();
  formFirstName();
  formLastName();
  formEmail();
  formBirthDate();
  formPartEvent();
  formRadioLocation();
  formCheckCondition();
  if (
    formFirstName() &&
    formLastName() &&
    formEmail() &&
    formBirthDate() &&
    formPartEvent() &&
    formCheckCondition() &&
    formRadioLocation()
  ) {
    formIsValid.style.display = "block";
  } else {
    formIsValid.style.display = "none";
  }
});