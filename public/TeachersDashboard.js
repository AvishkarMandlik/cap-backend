document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.drop');

  dropdowns.forEach(drop => {
      drop.addEventListener('click', function () {
          this.classList.toggle('active');

          let nextElement = this.nextElementSibling;
          while (nextElement && nextElement.classList.contains('dropdown')) {
              if (nextElement) { // Add this check
                  nextElement.style.display = nextElement.style.display === 'none' ? 'block' : 'none';
              }
              nextElement = nextElement.nextElementSibling;
          }
      });
  });
});

// To rotate the button 

// Get all dropdowns
const dropdowns = document.querySelectorAll('.drop');

// Add event listener to each dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('click', () => {
    // Get the dropdown icon
    const icon = dropdown.querySelector('.rotate-icon');
    // Toggle the 'down' class
    icon.classList.toggle('down');
  });
});

// menu bar

