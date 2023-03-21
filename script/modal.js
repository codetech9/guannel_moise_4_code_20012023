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
const errorMail = document.getElementById("errorMail");
const errorDate = document.getElementById("errorDate");
const errorQuantity = document.getElementById("errorQuantity");
const errorCheckbox1 = document.getElementById("errorCheckbox1");
const errorCheckbox2 = document.getElementById("errorCheckbox2");

let textcontrol = document.getElementsByClassName("text-control");


// function Firstname
function isFirstNameValid(first) {

  if(!regName.test(first)){
      console.log(first);
      errorFirst.textContent ='Prénom invalide.';
      errorFirst.style.color = 'red';
      errorFirst.style.fontSize = "1rem";
      return false;
  }else{
      console.log(first);
      errorFirst.textContent ='';
      return true;
  }
}

// function Lastname
function isLastNameValid(last) {
  if(!regName.test(last)){
      console.log(last);
      errorLast.textContent ='Nom invalide.';
      errorLast.style.color = 'red';
      errorLast.style.fontSize = "1rem";
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
    errorMail.style.fontSize = "1rem";
    return false;
  }
}

// Valide date
function isBirthDateValid(birthdate){
  if(!regDate.test(birthdate.value)){
    console.log("Date invalide");
    errorDate.textContent ='Date invalide.';
    errorDate.style.color = 'red';
    errorDate.style.fontSize = "1rem";
    return false;
  }else {
    console.log("Date valide");
    console.log(birthdate.value);
    return true;
  }
}


// function Quantity
function isQuantityValid(quantity){
  if(quantity.value < 0 ||  quantity.value >100){
    console.log( 'error');
    errorQuantity.textContent = "Quantité invalide";
    errorQuantity.style.color = "red";
      errorQuantity.style.fontSize = "1rem";
    return false;
  }else {
    console.log("quantité: " + quantity);
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
    errorCheckbox1.style.fontSize = "1rem";
    console.log("Vous devez lire et accepter les conditions d'utilisations");
    return false;
  } else {
    errorCheckbox1.textContent = "";
    return true;
  }
}



const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
   if (validate()){
    console.log("validated");
    const validated = document.getElementById("validated");
    validated.style.textAlign = "center";
    validated.innerHTML = "Merci pour votre inscription";
    validated.style.margin = "35% auto";
    // Bouton fermer
    const closeButton = document.createElement("button");
    closeButton.textContent = "Fermer";
    closeButton.classList.add('btn-submit');
    closeButton.style.marginBottom = "5%";

    closeButton.addEventListener("click", (ev) =>{
      const formElements = document.querySelectorAll("input");
      modalbg.style.display = "none";
      event.preventDefault();
    });

    console.log(closeButton);

    const contents = document.getElementById("contents");
    contents.appendChild(closeButton);
   }
   console.log("error check");
});

//function Validate
function validate(){
  // input values
  const first = document.getElementById('first').value;
  const last = document.getElementById('last').value;
  const email = document.getElementById('email').value;
  const quantity = document.getElementById("quantity").value;
  const checkbox1 = document.getElementById("checkbox1");
  const birthdate = document.getElementById('birthdate');

  // Errors Validations
  let hasError = false;
  console.log("etat: " + hasError);

  if(!isFirstNameValid(first)){
    hasError = true;
    console.log("etat-2: " + hasError);
  }

  if(!isLastNameValid(last)){
    hasError = true;
    console.log("etat-3: " + hasError);
  }

  if(!isEmailValid(email)){
    hasError = true;
    console.log("etat-4: " + hasError);
  }

  if(!isBirthDateValid(birthdate) ){
    hasError = true;
    console.log("etat-5: " + hasError);
  }

  if(!isQuantityValid(quantity) ){
    hasError = true;
    console.log("etat-6: " + hasError);
  }

  if(!isChecbox1Checked(checkbox1) ){
    hasError = true;
    console.log("etat-7: " + hasError);
  }




  console.log("etat-10: " + hasError);

  return !hasError;
}


function resetForm() {
    // input values
    const first = document.getElementById('first');
    first.value = "";
    const last = document.getElementById('last');
    last.value = "";
    const email = document.getElementById('email');
    email.value = "";
    const quantity = document.getElementById("quantity");
    quantity.value = "";
    const checkbox1 = document.getElementById("checkbox1");
    checkbox1.value = "";
    const checkbox2 = document.getElementById("checkbox2");
    checkbox2.value = "";
    const birthdate = document.getElementById('birthdate');
    birthdate.value = "";
}


// Close modal function
const crosses = document.getElementsByClassName("close")[0];

function closeModalBg(){
  crosses.addEventListener("click", (ev) => {
    modalbg.style.display = "none";
    errorFirst.textContent = "";
    errorLast.textContent = "";
    errorMail.textContent = "";
    resetForm();
    ev.preventDefault();
  });
}

closeModalBg();

// Close modal  while ESC key is press

// Get the modal element
function escClose() {
  // Listen for keydown event on the document
  document.addEventListener("keydown", function(event) {
    // Check if the pressed key is the "Esc" key
    if (event.key === "Escape") {
      // Close the modal
      modalbg.style.display = "none";
      resetForm();
    }
  });
}

escClose();
