const year = document.querySelector("#year");
Intl.DateTimeFormat(
	"en-US",
	{
		dateStyle: "full"
	}
)
year.innerHTML = `getFullYear(): span
class= "highlight">${today.getFullYear()}</span`;
