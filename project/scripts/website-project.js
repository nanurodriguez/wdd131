const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('open');
});

//adding current year to the page.
const year = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;

//Last modified at footer by date:
const getDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = getDate

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
  