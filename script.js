// Uses const because the variables are not reassigned, and let for count because it will change over time.
const countElement = document.getElementById("count");
const increaseButton = document.getElementById("increase");
const decreaseButton = document.getElementById("decrease");
const resetButton = document.getElementById("reset");

let count = 0; // Initialize the count variable to 0

// Function to increase the count by 1, but not exceed 50
function increaseNumber() {
  if (count < 50) {
    count ++;
  }
  countElement.textContent = count;
}

// Function to decrease the count by 1, but not go below 0
function decreaseNumber() {
  if (count > 0) {
    count --;
  }
  countElement.textContent = count;
}

// Function to reset the count to 0
function resetNumber() {
  count = 0;
  countElement.textContent = count;
}

// Event listeners for the buttons to call the respective functions when clicked
increaseButton.addEventListener("click", increaseNumber);
decreaseButton.addEventListener("click", decreaseNumber);
resetButton.addEventListener("click", resetNumber);