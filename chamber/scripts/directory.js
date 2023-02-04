const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");
const url = "../chamber/data/members.json";
const cards = document.querySelector("#cards");

async function getMemberData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.members);
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let fullName = document.createElement("h1"); 
    let address = document.createElement("h4");
    let website = document.createElement("a");
    let phone = document.createElement("h4");
    let membership = document.createElement("h4");
    let service = document.createElement("h4");
    let logo = document.createElement("img");

    // Build the h2 content out to show the member's full name
    fullName.textContent = `${member.name}`; // fill in the blank
    // Build the h3 content out to show the member's address
    address.textContent = `${member.address}`;
    // Build the h4 content out to show the member's website
    website.href = 'https://' + member.website;
    website.innerText = member.website;
    // Build the h4 content out to show the member's phone
    phone.textContent = `${member.phone}`;
    // Build the h4 content out to show the member's membership
    membership.textContent = `${member.membership}`;
    // Build the h4 content out to show the member's service
    service.textContent = `${member.service}`;
    // Build the image logo by setting all the relevant attributes
    logo.setAttribute("src", member.logo);
    logo.setAttribute("alt", `Logo of ${member.name}`); 
    logo.setAttribute("loading", "lazy");
    logo.setAttribute("width", "150");
    logo.setAttribute("height", "auto");

    // Append the section(card) with the created elements
    card.appendChild(logo);
    card.appendChild(fullName); 
    card.appendChild(address);
    card.appendChild(website);
    card.appendChild(phone);
    card.appendChild(membership);
    card.appendChild(service);
    

    cards.appendChild(card);
  }); // end of arrow function and forEach loop
};

getMemberData();

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}