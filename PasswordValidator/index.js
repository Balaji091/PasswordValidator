function checkPassword() {
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");
    
    const strength = validatePassword(password);
    result.textContent = `Password Strength: ${strength}`;
    result.style.color = getColor(strength);
  }
  
  // Function to validate the password and calculate strength
  function validatePassword(password) {
    let score = 0;
  
    // Length check: +1 for length >= 8, +2 for length >= 12
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
  
    // Check for uppercase letters
    if (/[A-Z]/.test(password)) score++;
  
    // Check for lowercase letters
    if (/[a-z]/.test(password)) score++;
  
    // Check for digits
    if (/\d/.test(password)) score++;
  
    // Check for special characters
    if (/[@$!%*?&#^()\-_=+{};:,<.>]/.test(password)) score++;
  
    // Determine password strength based on the score
    if (score <= 2) return "Weak";
    if (score === 3) return "Good";
    if (score === 4) return "Very Good";
    if (score === 5) return "Strong";
    return "Excellent";
  }
  
  // Function to get color based on strength
  function getColor(strength) {
    switch (strength) {
      case "Weak": return "red";
      case "Good": return "orange";
      case "Very Good": return "blue";
      case "Strong": return "green";
      case "Excellent": return "purple";
      default: return "black";
    }
  }
  