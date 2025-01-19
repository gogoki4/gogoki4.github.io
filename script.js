
  document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Example: Hardcoded credentials for validation
    const validUsername = "Arisu";
    const validPassword = "Mafiesteungeniu";
  
    if (username === validUsername && password === validPassword) {
      // Redirect to another page after successful login
      window.location.href = "countdown.html"; // Replace with your desired URL
    } else {
      // Show error message
      document.getElementById("message").textContent = "Invalid username or password.";
    }
  });
  
  