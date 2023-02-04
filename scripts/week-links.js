const jsonUrl = "../data/week-links.json";
const linkList = document.querySelector("#linkList");

async function apiLinkFetch() {
  try {
    const response = await fetch(jsonUrl);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // testing only
      displayLinkResults(data.weeks); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

const displayLinkResults = (weeks) => {
  weeks.forEach((obj) => {
    Object.entries(obj).forEach(([key, value]) => {
      //console.log(key + " " + value);

      let listItem = document.createElement("li");
      
      listItem.innerText = `${key}: `;
      linkList.appendChild(listItem);

      value.forEach((link) => {

        let linkText = document.createElement("a");
        linkText.href = link.link;
        linkText.innerText = link.name + " ";
        linkText.target = link.target        

        listItem.innerHTML += `${linkText.outerHTML}  | `;

        linkList.appendChild(listItem);

        //console.log(link.link);
      });


      
    });
  });
};

function displayLinkResults2(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description.toUpperCase();
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);
  captionDesc.textContent = `${desc}`;
}

apiLinkFetch();
