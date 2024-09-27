const SignupBtnLink = document.querySelector('.SignupBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');


SignupBtnLink.addEventListener('click', () => {
    wrapper.classList.add('active'); // Add active class when signing up
});
signInBtnLink.addEventListener('click', () => {
    wrapper.classList.remove('active'); // Remove active class when signing in
});
function togglePasswordVisibility() {
    var passwordField = document.getElementById('pwd');
    if (passwordField.type === 'password') {
      passwordField.type = 'text';
    } else {
      passwordField.type = 'password';
    }
  }
    // Dropdown toggle functionality
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = dropdown.querySelector('.dropdown-toggle');
    const dropdownContent = dropdown.querySelector('.dropdown-content');

    dropdownContent.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            const selectedValue = e.target.getAttribute('data-value');
            dropdownToggle.innerHTML = e.target.innerHTML + ' <i class="fa-solid fa-caret-down"></i>';
        }
    });

//Do not Touch this code
const form = document.querySelectorAll("form")[1];

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
