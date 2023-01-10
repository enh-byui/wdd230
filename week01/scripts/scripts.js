let current_date = new Date();
let current_year = current_date.getFullYear();
let oLastModif = new Date(document.lastModified);
let last_modification = oLastModif.toLocaleString();

document.querySelector("#current_date").innerHTML = current_year;
document.getElementById("last_modification").textContent = last_modification;