
//adding current year to the page.
const year = document.querySelector("#year");
const today = new Date();
currentYear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;

//Last modified at footer by date:
alert(document.lastModified);
let lastModified = new Date(document.lastModified);
