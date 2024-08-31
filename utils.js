function clear(resultElement) {
  resultElement.innerHTML = "";
  resultElement.classList.remove("result");
}

//clears the value of the input element
function reset() {
  const location = document.getElementById("locationInput");
  location.value = "";
}

export { clear, reset };
