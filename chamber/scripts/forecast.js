// select HTML elements in the document
const forecastTable = document.querySelector('#forecast');

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q=Pachuca&units=imperial&cnt=24&appid=385ed47fc79adbd486c53b8135f1c0f0';

async function apiForecastFetch() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const data = await response.json();
        //console.log(data); // testing only
        displayForecastResults(data); // uncomment when ready
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }

  function displayForecastResults(data) {

    const currentDate = new Date();
    let forecast = {};
    for (let i = 0; i < data.list.length; i++) {
      const dateTime = new Date(data.list[i].dt * 1000);
      const date = dateTime.toISOString().slice(0, 10);
      if (date > currentDate.toISOString().slice(0, 10) && Object.keys(forecast).length < 3) {
        if (!(date in forecast)) {
          forecast[date] = data.list[i];
        }
      }
    }



    Object.entries(forecast).forEach(([elementKey, element]) => {
      let tr = document.createElement('tr');
      let td1 = document.createElement('td');
      let td2 = document.createElement('td');
      let text1 = document.createTextNode(elementKey);
      let text2 = document.createTextNode(`${element.main.temp} °F`);

      td1.appendChild(text1);
      td2.appendChild(text2);
      tr.appendChild(td1);
      tr.appendChild(td2);

      forecastTable.appendChild(tr);
      
    });

  }
  
  apiForecastFetch();