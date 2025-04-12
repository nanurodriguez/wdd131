//adding current year to the page.
const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;

//Last modified at footer by date:
const getDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = getDate;

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const title = document.querySelector("#title");
const main = document.querySelector("main");

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
  title.classList.toggle("hide");
  //let expanded = hambutton.getAttribute('aria-expanded') === 'true' || false;
  //hambutton.setAttribute('aria-expanded', !expanded);
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

// Adding LAZY LOADING IMAGES:

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Adelaide Australia Temple",
    location: "Marden SA, Australia",
    dedicated: "2000, June 15",
    area: 10700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/adelaide-australia/400x250/adelaide-australia-temple-lds-851233-wallpaper.jpg",
  },
  {
    templeName: "Buenos Aires Argentina Temple",
    location: "Buenos Aires, Argentina",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/320x200/buenos-aires-argentina-temple-lds-236979-wallpaper.jpg",
  },
];

function loadImage(img) {
  img.setAttribute("src", img.dataset.src);
  img.removeAttribute("data-src"); // : Remove the data-src attribute after loading
}

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      loadImage(entry.target);
      observer.unobserve(entry.target); // Stop observing once loaded
    }
  });
});

//temples.forEach(temple => {
//	observer.observe(temple);
// });
// Function to create the HTML for each temple card
function createTempleCard(temple) {
  const article = document.createElement("article");
  const h3 = document.createElement("h3");
  const locationParagraph = document.createElement("p");
  const dedicatedParagraph = document.createElement("p");
  const image = document.createElement("img");

  h3.textContent = temple.templeName;
  locationParagraph.textContent = temple.location;
  dedicatedParagraph.textContent = `Dedicated: ${temple.dedicated}`;

  // lazy loading - Images
  image.setAttribute("data-src", temple.imageUrl);
  image.setAttribute("alt", temple.templeName);
  image.classList.add("lazy-load");

  article.appendChild(h3);
  article.appendChild(image);
  article.appendChild(locationParagraph);
  article.appendChild(dedicatedParagraph);

  return article;
}

// Create and append temple cards to the main element
temples.forEach((temple) => {
  const templeCard = createTempleCard(temple);
  main.appendChild(templeCard);
});

// Select all the images with the 'data-src' attribute for lazy loading
const lazyImages = document.querySelectorAll("img[data-src]");
lazyImages.forEach((img) => {
  observer.observe(img);
});

