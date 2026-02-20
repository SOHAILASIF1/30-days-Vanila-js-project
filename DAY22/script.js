


let  getButton=document.getElementById("getWeatherBtn")
let result=document.getElementById("weatherResult")

getButton.addEventListener("click", async () => {
  let city = document.getElementById("cityInput").value;

  let link = `https://api.weatherapi.com/v1/current.json?key=70f52bc6a7f847fe9f2121745242309&q=${city}&aqi=yes`;

  const dataFetch = await fetch(link);
  const resp = await dataFetch.json();

  console.log(resp); // 👈 full object dekho

  if (resp.error) {
    result.innerHTML = "City not found ❌";
    return;
  }

  result.innerHTML = `
    City: ${resp.location.name} <br>
    Temp: ${resp.current.temp_c} °C <br>
    Condition: ${resp.current.condition.text}
  `;
});