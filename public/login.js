// Select the wrapper and the sign-up and sign-in links
const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link a');
const signInLink = document.querySelector('.signUp-link p a');

// Define a function to toggle the wrapper class
function toggleWrapper() {
  wrapper.classList.toggle('active');
}

// Add event listeners to the sign-up and sign-in links
signUpLink.addEventListener('click', toggleWrapper);
signInLink.addEventListener('click', toggleWrapper);