const visitsDisplay = document.querySelector(".last-visit");

// get the stored value in localStorage
let lastVisitDate = new Date(window.localStorage.getItem("last-visit"));
let currentDate = new Date();



// determine if this is the first visit or display the number of visits.
if (lastVisitDate.getTime() == 0) {
  visitsDisplay.textContent = `This is your first visit!`;
} else {
  let difference = lastVisitDate.getTime() - currentDate.getTime();
  let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
  visitsDisplay.textContent = totalDays + " days ago";
}

// store the new date
localStorage.setItem("last-visit", currentDate);
