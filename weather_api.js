import { clear, reset } from "./utils.js";
import { showinfo } from "./ui.js";

async function getWeather(location) {
  try {
    const result = document.getElementById("result");
    //clearing the output and adding the loading icon
    clear(result);
    const loading = document.createElement("div");
    loading.classList.add("loading");
    result.appendChild(loading);

    //fetching the data from visualcrossing
    const apiKey = "PUU8EMEZZ86YL3XHMSH6ABLQ6";
    const apiUrl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${apiKey}&contentType=json`;
    const response = await fetch(apiUrl, { mode: "cors" });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    showinfo(data);
  } catch (error) {
    //error handling
    console.error("Error: ", error);
    result.innerHTML = `Error: Enter a valid location`;
    result.classList.add("result");
  }
}
async function getLocation(event, location) {
  //preventing the form to be submitted by default
  event.preventDefault();
  //getting the input value and passing it to the getWeather function
  let city = await location.value;
  reset();
  getWeather(city);
}

export { getWeather, getLocation };
