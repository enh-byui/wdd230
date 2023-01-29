
//form
const membershipSelector = document.querySelector('#membership');
const costSelector = document.querySelector("#cost");
const discountSelector = document.querySelector("#discount");
const trainingSelector = document.querySelector("#training");
const dateSelector = document.querySelector("#currentDate");
dateSelector.innerHTML = new Date();
console.log(new Date());

membershipSelector.addEventListener('change', (event) =>{
  

  if(event.target.value == "np") {
    costSelector.innerHTML = 'Cost: $0';
    discountSelector.innerHTML = "Discounts: 100%";
    trainingSelector.innerHTML = "Training Price: $0";
  } else if (event.target.value == "bronze") {
    costSelector.innerHTML = 'Cost: $200';
    discountSelector.innerHTML = "Discounts: 10%";
    trainingSelector.innerHTML = "Training Price: $220";
  } else if (event.target.value == "silver") {
    costSelector.innerHTML = 'Cost: $150';
    discountSelector.innerHTML = "Discounts: 15%";
    trainingSelector.innerHTML = "Training Price: $150";
  } else if (event.target.value == "gold") {
    costSelector.innerHTML = 'Cost: $100';
    discountSelector.innerHTML = "Discounts: 20%";
    trainingSelector.innerHTML = "Training Price: $100";
  } else {
    costSelector.innerHTML = '';
    discountSelector.innerHTML = "";
    trainingSelector.innerHTML = "";
  }

});
