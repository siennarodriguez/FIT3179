// Function declarations
function incrementCounter() {
  // Retrieve counter
  var spanElement = document.getElementById("counter");
  // Read the number of clicks
  var count = spanElement.getAttribute("numberOfClicks");
  // Incremement value by one
  count++;
  // Update number of clicks
  spanElement.innerText = count;
  spanElement.setAttribute("numberOfClicks", count);
}

// Script calls
document
  .getElementById("incrementButton")
  .addEventListener("click", incrementCounter);

function toggleVisibility() {
  var chartImage = document.getElementById("chart1");
  if (chartImage.style.display === "none") {
    chartImage.style.display = "block";
  } else {
    chartImage.style.display = "none";
  }
}
