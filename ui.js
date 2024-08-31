import { clear, reset } from "./utils.js";

//initializing tempCelius, tempFahrenheit to toggle between them
let isCelcius = true;
let tempCelcius, tempFahrenheit;

function showinfo(data) {
  const result = document.getElementById("result");
  //adding element and styles to append them in the output
  clear(result);

  tempCelcius = document.createElement("p");
  tempCelcius.innerHTML = `Temperature: ${data.currentConditions.temp}°C`;

  tempFahrenheit = document.createElement("p");
  tempFahrenheit.innerHTML = `Temperature: ${
    (data.currentConditions.temp * 9) / 5 + 32
  }°F`;
  tempFahrenheit.style.display = "none";

  const address = document.createElement("p");
  address.innerHTML = `Location: ${data.resolvedAddress}`;

  const humidity = document.createElement("p");
  humidity.innerHTML = `Humidity: ${data.currentConditions.humidity}%`;

  const condition = document.createElement("p");
  condition.innerHTML = `Condition: ${data.currentConditions.conditions}`;

  const description = document.createElement("p");
  description.innerHTML = `Description: ${data.description}`;

  result.classList.add("result");

  result.appendChild(address);
  result.appendChild(tempCelcius);
  result.appendChild(tempFahrenheit);
  result.appendChild(humidity);
  result.appendChild(condition);
  result.appendChild(description);

  document.getElementById("toggle-button").disabled = false;

  reset();
}

function toggleUnits() {
    
  isCelcius = !isCelcius;

  document.getElementById("toggle-button").textContent = isCelcius ? "°F" : "°C";
  if (isCelcius) {
    tempFahrenheit.style.display = "none";
    tempCelcius.style.display = "block";
  } else {
    tempFahrenheit.style.display = "block";
    tempCelcius.style.display = "none";
  }
}

export { showinfo, toggleUnits };
