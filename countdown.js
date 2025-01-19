// Function to get the target date (either this month's 20th or next month's 20th)
function getTargetDate() {
  const now = new Date();
  const currentMonth = now.getMonth(); // Get the current month (0-based)
  const currentYear = now.getFullYear(); // Get the current year
  const targetDate = new Date(currentYear, currentMonth, 20, 15, 45, 0); // The 20th of this month at 15:45:00

  // If the 20th of this month has already passed, set the target to the 20th of the next month
  if (now > targetDate) {
    targetDate.setMonth(currentMonth + 1); // Set target to the next month
  }

  return targetDate.getTime();
}

// Initialize the target date
let targetDate = getTargetDate();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().toLocaleString("en-US", { timeZone: "Europe/Bucharest" }); // Current time in Bucharest
  const timeLeft = targetDate - new Date(now).getTime();

  if (timeLeft <= 0) {
    // Set all time values to "00"
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    
    // Change the title text and countdown message after the countdown expires
    document.getElementById("countdown-title").textContent = "Timp rămas până la următoarea aniversare"; // Change the title
    document.getElementById("countdown-message").textContent = "Felicitări! Suntem oficial împreună de un an. La mulți ani! 🎉"; // Customize the message
    
    // Reset the target date to the next month's 20th at 15:45:00
    targetDate = getTargetDate();
    return;
  }

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Update each time unit with animation
  updateTimeUnit("days", days);
  updateTimeUnit("hours", hours);
  updateTimeUnit("minutes", minutes);
  updateTimeUnit("seconds", seconds);
}

// Function to update individual units with animation
function updateTimeUnit(id, newValue) {
  const element = document.getElementById(id).parentElement; // Select the time-box container
  const currentValue = document.getElementById(id).textContent;

  if (currentValue !== newValue.toString().padStart(2, "0")) {
    // Add the flip class for animation
    element.classList.add("flip");

    // Update the content after the animation
    setTimeout(() => {
      document.getElementById(id).textContent = newValue.toString().padStart(2, "0");
      element.classList.remove("flip");
    }, 600); // Match the timing with CSS transition
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initialize countdown
updateCountdown();
