document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for contacting us!');
  });
  
  //HAMBURGUER MENU:

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
