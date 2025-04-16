//adding current year to the page.
const year = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = ` <span class="highlight">${today.getFullYear()}</span>`;

//Last modified at footer by date:
const getDate = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = getDate


const products = [
	{
	  id: "fc-1888",
	  name: "Sugar",
	  averagerating: 4.5
	},
	{
	  id: "fc-2050",
	  name: "Honey",
	  averagerating: 4.7
	},
	{
	  id: "fs-1987",
	  name: "Stevia",
	  averagerating: 3.5
	},
	{
	  id: "ac-2000",
	  name: "Monks Fruit",
	  averagerating: 3.9
	}
  ];
  const productSelect = document.querySelector("#product");

  productSelect.innerHTML = "";

  products.forEach(product => {
	const option = document.createElement("option");
	option.value = product.id;
	option.textContent = product.name;
	productSelect.appendChild(option);
  });