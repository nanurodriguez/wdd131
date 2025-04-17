// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const hambutton = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links')

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	hambutton.classList.toggle('show');
  navLinks.classList.toggle('show');
});


//lazy load with IntersectionObserver - image in the H1

document.addEventListener("DOMContentLoaded", function () {
    const lazyElements = document.querySelectorAll('.lazy-bg');
  
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const bgImage = el.getAttribute('data-bg');
          el.style.backgroundImage = `url(${bgImage})`;
          obs.unobserve(el); // Stop observing once loaded
        }
      });
    });
  
    lazyElements.forEach(el => observer.observe(el));
  });

  //adding current year to the page.
const year = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;

//Last modified at footer by date:
const getDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = getDate
  