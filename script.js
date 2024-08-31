
import { toggleUnits } from "./ui.js";
import { getLocation } from "./weather_api.js";

function init() {
  const locationInput = document.getElementById("locationInput");
  const submitBtn = document.getElementById("btn");
  const toggleBtn = document.getElementById("toggle-button");

  if (!locationInput || !submitBtn || !toggleBtn) {
    throw new Error("null pointer reference");
  }

  submitBtn.addEventListener("click", (e) => {
    try {
      getLocation(e, locationInput);
    } catch (error) {
      console.error(error);
    }
  });

  locationInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      try {
        getLocation(e, locationInput);
      } catch (error) {
        console.error(error);
      }
    }
  });

  toggleBtn.addEventListener("click", toggleUnits);
}


init();
