// Write your code in this file!

// Define currentUser
const currentUser = "Sadi";

// Define welcomeMessage
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Define excitedWelcomeMessage
const excitedWelcomeMessage = welcomeMessage.toUpperCase();

// Define shortGreeting
const shortGreeting = `Welcome, ${currentUser[0]}!`;

// Export the variables if needed
module.exports = {
  currentUser,
  welcomeMessage,
  excitedWelcomeMessage,
  shortGreeting
};

