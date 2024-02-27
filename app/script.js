// Function to load the navbar
function loadNavbar() {
  fetch('./navbar/navbar.html')
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    })
    .catch(error => {
      console.log('Error fetching the navbar:', error);
    });
}

// Function to load content
function loadContent(href) {
  const contentDiv = document.querySelector('.content');
  contentDiv.style.animation = 'none';

  fetch(`./${href}/${href}.html`)
    .then(response => response.text())
    .then(data => {
      contentDiv.innerHTML = data;
      contentDiv.style.animation = 'fadeIn 0.5s ease-in-out forwards';

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = `./${href}/${href}.css`;
      document.head.appendChild(link);

      const script = document.createElement('script');
      script.src = `./${href}/${href}.js`;
      document.body.appendChild(script);
    })
    .catch(error => {
      console.log('Error fetching content:', error);
      contentDiv.innerHTML = '<p>Content not found</p>';
    });
}

// Function to toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');

  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('dark-mode-navbar');

  const menuItems = document.querySelectorAll('.menu li a');
  menuItems.forEach(item => {
    item.classList.toggle('dark-mode-menu');
  });

  const inputs = document.querySelectorAll('.input-group input, select, textarea');
  inputs.forEach(input => {
    input.classList.toggle('dark-mode-input');
  });
}

function reloadWindow(){
  window.location.reload();
}



document.addEventListener('DOMContentLoaded', () => {
  loadNavbar(); 
  loadContent('home'); 
});
