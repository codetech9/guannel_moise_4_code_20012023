function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal(){
  modalbg.style.display = "block";
}

// REGEX
const regName = /^[A-Za-z]{2}/;
const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;

// DOM Errors
const errorFirst = document.getElementById("errorFirst");
const errorLast = document.getElementById("errorLast");
const errorDate = document.getElementById("errorDate");
const errorQuantity = document.getElementById("errorQuantity");
const errorCheckbox1 = document.getElementById("errorCheckbox1");
const errorCheckbox2 = document.getElementById("errorCheckbox2");

// function Firstname
function isFirstNameValid(first) {

  if(!regName.test(first)){
      console.log(first);
      errorFirst.textContent ='Prénom invalide.';
      errorFirst.style.color = 'red';
      return false;
  }else{
      console.log(first);
      errorFirst.textContent ='';
      errorFirst.style.color = 'green';
      return true;
  }
}

// function Lastname
function isLastNameValid(last) {
  if(!regName.test(last)){
      console.log(last);
      errorLast.textContent ='Nom invalide.';
      errorLast.style.color = 'red';
      return false;
  }else{
    console.log(last)
    errorLast.textContent='';
    errorLast.style.color = 'green';
    return true;
  }
}

// function Email
function isEmailValid(email){
  if(regEmail.test(email)){
    console.log("Email valide: " + email);
    errorMail.textContent ='';
    errorMail.style.color = 'green';
    return true;
  }else {
    console.log("Invalid email given.");
    errorMail.textContent ='Mail invalide.';
    errorMail.style.color = 'red';
    return false;
  }
}

// Valide date
function isBirthDateValid(birthdate){
  if(!regDate.test(birthdate.value)){
    console.log("Date invalide");
    return true;
  }else {
    console.log("Date valide");
    console.log(birthdate.value);
    return false;
  }
}


// function Quantity
function isQuantityValid(quantity){
  if(quantity.value === ""){
    console.log( 'error');
    errorQuantity.textContent = "Quantité invalide";
    errorQuantity.style.color = "red";
    return false;
  }else {
    console.log(quantity);
    errorQuantity.textContent = "";
    errorQuantity.style.color = "green";
    return true;
  }
}


// Radio Check
function isRadioChecked() {
  location1 = document.getElementById("location1").defaultChecked;
}


// Checkbox1

function isChecbox1Checked(checkbox1) {
  console.log(checkbox1.checked);
  if (!checkbox1.checked) {
    errorCheckbox1.textContent = "Vous devez lire et accepter les conditions d'utilisations";
    console.log("Vous devez lire et accepter les conditions d'utilisations");
  } else {
    errorCheckbox1.textContent = "";
  }
}

// Checkbox2
function isChecbox2Checked(checkbox2) {
  console.log(checkbox2.value);
  if (checkbox2.checked) {
    errorCheckbox2.textContent = "";
  } else {
   errorCheckbox2.textContent = "Vous n'avez rien cochez";
  }
}

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
   if (validate()){
     const content = document.getElementsByClassName("content");
     content.textContent = "Merci !";
   }
   console.log("test");
});

//function Validate
function validate(){
  // input values
  const first = document.getElementById('first').value;
  const last = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const quantity = document.getElementById("quantity").value;
  const checkbox1 = document.getElementById("checkbox1");
  const checkbox2 = document.getElementById("checkbox2");
  const birthdate = document.getElementById('birthdate');

  // Errors Validations
  let hasError = false;
  if(!isFirstNameValid(first)){
    hasError = true;
  }

  if(!isLastNameValid(last)){
    hasError = true;
  }

  if(!isEmailValid(email)){
    hasError = true;
  }

  if(!isBirthDateValid(birthdate) ){
    hasError = true;
  }

  if(!isChecbox1Checked(checkbox1) ){
    hasError = true;
  }

  if(!isChecbox2Checked(checkbox2) ){
    hasError = true;
  }

  if(!isRadioChecked() ){
    hasError = true;
  }

  return !hasError;
}



// Close modal
const crosses = document.getElementsByClassName("close")[0];

function closeModalBg(){
  crosses.addEventListener("click", (ev) => {
    modalbg.style.display = "none";
    ev.preventDefault();
  });
}

closeModalBg();
