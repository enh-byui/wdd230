const lastVisitDisplay = document.querySelector("#last-visit");
const visitsDisplay = document.querySelector("#num-visit");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-num"));
let lastVisit = Date(window.localStorage.getItem("visits-ls"));
let currentDate = new Date();

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {

	let printDate = new Date(lastVisit);

	visitsDisplay.textContent = numVisits;
	lastVisitDisplay.textContent = printDate.toDateString();
} else {
	visitsDisplay.textContent = 0;
	lastVisitDisplay.textContent = `This is your first visit!`;
	
}

// increment the number of visits.
numVisits++;
// store the new number of visits value

localStorage.setItem("visits-num", numVisits);
localStorage.setItem("visits-ls", currentDate);
