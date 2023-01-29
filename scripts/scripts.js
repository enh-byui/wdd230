const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);

const rating = document.getElementById("rating");
const rangevalue = document.getElementById("r");

function displayRatingValue() {
    rating.innerHTML = rangevalue.value;
}

rangevalue.addEventListener('change', displayRatingValue);
rangevalue.addEventListener('input', displayRatingValue);

const kp1 = document.querySelector('#passwordKey');
const kp2 = document.querySelector('#confirmPassword');
const message = document.querySelector("#formmessage");

kp2.addEventListener("focusout", checkSame);

// This should be refactored.
function checkSame() {
	if (kp1.value !== kp2.value) {
		message.textContent = "Key Phrases DO NOT MATCH!";
		message.style.display = "block";
		kp2.style.backgroundColor = "#aa3333";
		kp2.style.color = "#fff";
		kp2.focus();
		kp2.value = "";
	} else {
		message.style.display = "none";
		kp2.style.backgroundColor = "#fff";
		kp2.style.color = "#000";
	}
}

//Table
const fullName = document.querySelector('#fullName');
const email = document.querySelector('#email');
const raiting = document.querySelector('#raiting');
const username = document.querySelector('#username');
const contactTable = document.querySelector('#user-table');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const getName = urlParams.get('fullName');
fullName.innerHTML = getName;

const getEmail = urlParams.get('email');
email.innerHTML = getEmail;

const getRaiting = urlParams.get('range');
raiting.innerHTML = getRaiting;

const getUsername = urlParams.get('password');
username.innerHTML = getUsername;

if (getName == null) {
	contactTable.style.display = "none";
}