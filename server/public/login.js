const SignupBtnLink = document.querySelector('.SignupBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');





// document.addEventListener('DOMContentLoaded', function(){
//   fetch('/check-session', {
//     credentials: 'include' // Include cookies in request
//   })
//   .then(response => response.json())
//   .then(data => {
//     if (data.loggedIn) {
//       alert('User is logged in');
//     }
//   });
  
// });


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
            document.getElementById("signRole").value = selectedValue ;
        }
    });

//Do not Touch this code
document.addEventListener("DOMContentLoaded",() => {
  sessionStorage.removeItem("mob");
})


// const form = document.querySelectorAll("form")[1];
const form = document.querySelector(".signupform");

form.addEventListener("submit", signupHandler);
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
  if(result.success){
    location.reload();
  }
}


// Select the form correctly and add an event listener



    

const signinForm = document.querySelector("form");
const terms = document.getElementById('terms');

async function signInHandler(event) {
  event.preventDefault();
  if(terms.checked){
    const formData = new FormData(signinForm);
    const data = Object.fromEntries(formData.entries());
    const response = await fetch("/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    const result = await response.json();
    alert(result.message);
    if(result.success){
      sessionStorage.setItem("mob", result.mobileNumber);
      if(document.getElementById('signRole').value =='student'){
        window.location.href = './StudentDashboard.html';
      }
      if(document.getElementById('signRole').value=='teacher'){
        window.location.href = './TeachersDashboard.html';
      }
      if(document.getElementById('signRole').value=='cap'){
        window.location.href = './cappage.html';
      }
    }

  }else{
    alert("Please accept terms and conditions")
  }
};


function noChange(event){
  event.preventDefault();
}