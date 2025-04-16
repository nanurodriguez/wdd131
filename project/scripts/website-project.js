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