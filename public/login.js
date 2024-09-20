// Select the wrapper and the sign-up and sign-in links
const wrapper = document.querySelector(".wrapper");
const signUpLink = document.querySelector(".signUp-link a");
const signInLink = document.querySelector(".signUp-link p a");

// Define a function to toggle the wrapper class
function toggleWrapper() {
  wrapper.classList.toggle("active");
}

// Add event listeners to the sign-up and sign-in links
signUpLink.addEventListener("click", toggleWrapper);
signInLink.addEventListener("click", toggleWrapper);

//Do not Touch this code
const form = document.querySelector("form");

async function signupHandler(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const response = await fetch("/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  alert(result.message);
};
