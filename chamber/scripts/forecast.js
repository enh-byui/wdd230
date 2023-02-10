// select HTML elements in the document
const forecastTable = document.querySelector('#forecast');

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Pachuca&units=imperial&cnt=24&appid=385ed47fc79adbd486c53b8135f1c0f0';

async function apiForecastFetch() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayForecastResults(data.list); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayForecastResults(data) {
    data.forEach(element => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let text1 = document.createTextNode(element.dt_txt);
      let text2 = document.createTextNode(`${element.main.temp} °F`);

      td1.appendChild(text1);
      td2.appendChild(text2);
      tr.appendChild(td1);
      tr.appendChild(td2);

      forecastTable.appendChild(tr);
      
    });
  }
  
  apiForecastFetch();