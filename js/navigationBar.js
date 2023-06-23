let mainNav = document.getElementById('nav-menu');
let navBarToggle = document.getElementById('navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});